const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Job list
let jobs = [
  {
    _id: "1",
    title: "Frontend Developer",
    description: "React Developer",
    location: "Remote"
  },
  {
    _id: "2",
    title: "Backend Developer",
    description: "Node Developer",
    location: "India"
  }
];

// Applications list
let applications = [];

// Root route
app.get("/", (req, res) => {
  res.send("Unizoy Job Board API Running");
});


// Get all jobs
app.get("/jobs", (req, res) => {
  res.json(jobs);
});


// Admin: post new job
app.post("/jobs", (req, res) => {

  const newJob = {
    _id: Date.now().toString(),
    title: req.body.title,
    description: req.body.description,
    location: req.body.location
  };

  jobs.push(newJob);

  res.json({
    message: "Job created successfully",
    job: newJob
  });
});


// Candidate: apply for job
app.post("/applications", (req, res) => {

  const application = {
    jobId: req.body.jobId,
    name: req.body.name,
    email: req.body.email,
    resumeLink: req.body.resumeLink
  };

  applications.push(application);

  res.json({
    message: "Application submitted successfully"
  });
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});