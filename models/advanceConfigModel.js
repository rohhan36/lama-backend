const mongoose = require("mongoose");

const advanceConfigSchema = mongoose.Schema(
  {
    primaryColor: {
      type: String,
      required: [true, "Please enter a primary color"],
    },
    fontColor: {
      type: String,
      required: [true, "Please enter a font color"],
    },
    fontSize: {
      type: Number,
      required: [true, "Please enter a font size"],
    },
    chatHeight: {
      type: Number,
      required: [true, "Please enter a chat height"],
    },
    showSources: {
      type: Boolean,
      required: [true, "Please select show sources"],
    },
    chatIconSize: {
      type: Number,
      required: [true, "Please select a chat icon size"],
    },
    position: {
      type: String,
      required: [true, "Please select a position"],
    },
    bottomDistance: {
      type: Number,
      required: [true, "Please select a bottom distance"],
    },
    horizontalDistance: {
      type: Number,
      required: [true, "Please select a horizontal distance"],
    },
    projectId: {
      type: String,
      required: [true, "Please enter a projectId"],
    },
  },
  {
    timestamps: true,
  }
);

const AdvanceConfig = mongoose.model("AdvanceConfig", advanceConfigSchema);

module.exports = AdvanceConfig;
