const mongoose = require("mongoose");

const transcriptSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a title"],
    },
    description: {
      type: String,
      required: [true, "Please enter the description"],
    },
    projectId: {
      type: String,
      required: [true, "Please enter the related project ID"],
    },
  },
  {
    timestamps: true,
  }
);

const Transcripts = mongoose.model("transcripts", transcriptSchema);

module.exports = Transcripts;
