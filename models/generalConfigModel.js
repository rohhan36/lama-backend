const mongoose = require("mongoose");

const generalConfigSchema = mongoose.Schema(
  {
    chatbotName: {
      type: String,
      required: [true, "Please enter a chatbot name"],
    },
    welcomeMessage: {
      type: String,
      required: [true, "Please enter a welcome message"],
    },
    inputPlaceholder: {
      type: String,
      required: [true, "Please enter an input paceholder"],
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

const GeneralConfig = mongoose.model("GeneralConfig", generalConfigSchema);

module.exports = GeneralConfig;
