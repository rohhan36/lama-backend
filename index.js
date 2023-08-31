require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const Projects = require("./models/projectModel");
const User = require("./models/userModel");
const Transcripts = require("./models/transcriptModel");
const GeneralConfig = require("./models/generalConfigModel");
const AdvanceConfig = require("./models/advanceConfigModel");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL);

app.listen(PORT, () => {
  console.log(`Server started on port no ${PORT}`);
});

app.get("/", (req, res) => {
  res.json("hello world");
});

//get all projects bu user email
app.get("/projects", async (req, res) => {
  try {
    const email = req.query.email;
    const projects = await Projects.find({ email: email });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//create new project
app.post("/projects", async (req, res) => {
  try {
    const project = await Projects.create(req.body);
    res.status(200).json(project);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// get project by ID
app.get("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Projects.findById(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update a project
app.put("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Projects.findByIdAndUpdate(id, req.body);

    //we coulud not find the product with given ID
    if (!product) {
      return res.status(404).json({ message: `Could not find project with ID ${id}` });
    }
    const updatedProject = await Projects.findById(id);

    res.status(200).json(updatedProject);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//delete project
app.delete("/projects/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Projects.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: `Could not find project with ID ${id}` });
    }

    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//get user by email
app.get("/users/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.find({ email: email });
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//create new user
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//create new transcript
app.post("/transcripts", async (req, res) => {
  try {
    const transcript = await Transcripts.create(req.body);
    res.status(200).json(transcript);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//get transcripts by project ID
app.get("/transcripts", async (req, res) => {
  try {
    const id = req.query.projectId;
    const transcript = await Transcripts.find({ projectId: id });
    res.status(200).json(transcript);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//update transcript by id
app.patch("/transcripts/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const transcript = await Transcripts.findByIdAndUpdate(id, req.body);
    //we coulud not find the product with given ID
    if (!transcript) {
      return res.status(404).json({ message: `Could not find product with ID ${id}` });
    }

    const updatedTranscript = await Transcripts.findById(id);
    res.status(200).json(updatedTranscript);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//delete transcript by ID
app.delete("/transcripts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const transcript = await Transcripts.findByIdAndDelete(id);

    if (!transcript) {
      return res.status(404).json({ message: `Could not find product with ID ${id}` });
    }

    res.status(200).json({ message: "Successfully deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//get general config by projectId
app.get("/generalconfigs", async (req, res) => {
  try {
    const id = req.query.projectId;
    const generalConfig = await GeneralConfig.find({ projectId: id });
    res.status(200).json(generalConfig);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//create general gonfig
app.post("/generalconfigs", async (req, res) => {
  try {
    const generalConfig = await GeneralConfig.create(req.body);
    res.status(200).json(generalConfig);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update general config
app.patch("/generalconfigs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const generalConfig = await GeneralConfig.findByIdAndUpdate(id, req.body);
    //we coulud not find the product with given ID
    if (!generalConfig) {
      return res.status(404).json({ message: `Could not find product with ID ${id}` });
    }

    const updatedGeneralConfig = await GeneralConfig.findById(id);
    res.status(200).json(updatedGeneralConfig);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//get advance configes by projectID
app.get("/advanceconfigs", async (req, res) => {
  try {
    const id = req.query.projectId;
    const advanceConfig = await AdvanceConfig.find({ projectId: id });
    res.status(200).json(advanceConfig);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//create advance gonfig
app.post("/advanceconfigs", async (req, res) => {
  try {
    const advanceconfig = await AdvanceConfig.create(req.body);
    res.status(200).json(advanceconfig);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.patch("/advanceconfigs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const advanceconfig = await AdvanceConfig.findByIdAndUpdate(id, req.body);
    //we coulud not find the product with given ID
    if (!advanceconfig) {
      return res.status(404).json({ message: `Could not find product with ID ${id}` });
    }

    const updatedAdvanceconfig = await AdvanceConfig.findById(id);
    res.status(200).json(updatedAdvanceconfig);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});
