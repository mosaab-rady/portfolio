import nextConnect from 'next-connect';
import multer from 'multer';
import sharp from 'sharp';
// import Project from '../../db/models/projectModel';
import { conectDB } from '../../db/config';
import { Readable } from 'stream';
import { GridFsStorage } from 'multer-gridfs-storage';
import mongoose from 'mongoose';

const storage = (filename) =>
  new GridFsStorage({
    url: process.env.DATABASE,
    file: (req, file) => {
      return { filename, bucketName: 'photos' };
    },
    options: { useUnifiedTopology: true },
  });

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload only images.'));
  }
};

const upload = multer({
  fileFilter: multerFilter,
});

const apiRoute = nextConnect({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res, next) => {
    res.status(404).end('Page is not found');
  },
});

apiRoute.use(async (req, res, next) => {
  await conectDB();
  next();
});

apiRoute.use(
  upload.fields([
    {
      name: 'logoImage',
      maxCount: 1,
    },
    {
      name: 'image',
      maxCount: 1,
    },
  ])
);

apiRoute.use(async (req, res, next) => {
  if (!req.files) return next();

  if (req.files.image) {
    req.body.image = `${req.body.name}_image_${Date.now()}`;
    const data = await sharp(req.files.image[0].buffer)
      .toFormat('jpeg')
      .jpeg({ quality: 100 })
      .toBuffer();

    const fileStream = Readable.from(data);
    await storage(req.body.image).fromStream(
      fileStream,
      req,
      req.files.image[0]
    );
  }

  if (req.files.logoImage) {
    req.body.logoImage = `${req.body.name}_logoImage_${Date.now()}`;
    const data = await sharp(req.files.logoImage[0].buffer)
      .toFormat('jpeg')
      .jpeg({ quality: 100 })
      .toBuffer();

    const fileStream = Readable.from(data);
    await storage(req.body.logoImage).fromStream(
      fileStream,
      req,
      req.files.logoImage[0]
    );
  }
  next();
});

apiRoute.post(async (req, res) => {
  console.log(req.body);

  const project = await mongoose.model('Project').create({
    name: req.body.name,
    summary: req.body.summary,
    description: req.body.description,
    color: req.body.color,
    link: req.body.link,
    logoImage: req.body.logoImage,
    image: req.body.image,
  });

  res.status(201).json({
    status: 'success',
    data: {
      project,
    },
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
