import mongoose from 'mongoose';
const createProject = async (parent, args) => {
  const project = await mongoose.model('Project').create({
    name: args.name,
    summary: args.summary,
  });
  return project;
};

module.exports = {
  createProject,
};
