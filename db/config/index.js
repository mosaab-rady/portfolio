import mongoose from 'mongoose';

const DB = process.env.DATABASE;

export const conectDB = async () => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return;
  }

  // connect to DB
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB connection successful !!');
    });
};
