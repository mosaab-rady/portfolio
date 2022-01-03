import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Project must have a name.'],
  },
  summary: {
    type: String,
    required: [true, 'Project must have summary.'],
  },
  description: {
    type: String,
    required: [true, 'Project must have details.'],
  },
  logoImage: {
    type: String,
    required: [true, 'Project must have a logo.'],
  },
  image: {
    type: String,
    required: [true, 'Project must have an Image'],
  },
  color: {
    type: String,
    required: [true, 'Project must have a color theme.'],
  },
  link: {
    type: String,
    required: [true, 'Project must have a link.'],
  },
});

mongoose.models = {};

const Project = mongoose.model('Project', projectSchema);

export default Project;
