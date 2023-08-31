const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a project name"],
    },
    projectList: {
      type: Array,
    },
    email: {
      type: String,
      required: [true, "Please enter project owner's email"],
    },
  },
  {
    timestamps: true,
  }
);

const Projects = mongoose.model("Project", projectSchema);

module.exports = Projects;
