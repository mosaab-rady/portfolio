import mongoose from 'mongoose';

const getProject = async (parent, args) => {
  const project = await mongoose.model('Project').findById(args.id);
  if (!project) {
    throw new Error('No document found with that ID.');
  }
  return project;
};

const getAllProjects = async () => {
  const projects = await mongoose.model('Project').find();
  return projects;
};

module.exports = {
  getProject,
  getAllProjects,
};
