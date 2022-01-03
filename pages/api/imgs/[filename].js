const mongoose = require('mongoose');
const url = process.env.DATABASE;

export default async function handler(req, res) {
  const { filename } = req.query;
  const connect = mongoose.createConnection(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let gfs;
  connect.once('open', async () => {
    gfs = new mongoose.mongo.GridFSBucket(connect.db, {
      bucketName: 'photos',
    });

    await gfs.find({ filename: filename }).toArray((err, files) => {
      if (!files[0] || files.length === 0) {
        return new Error('no files');
      }
      gfs.openDownloadStreamByName(filename).pipe(res);
    });
  });
}
