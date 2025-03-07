const Task = require("../models/Tasks");
const User = require("../models/User");
const Project = require("../models/Project");

const createTask = async (req, res) => {
  const {
    title,
    description,
    dueDate,
    status,
    priority,
    assignee,
    reporter,
    project,
    comments,
    attachments,
  } = req.body;

  try {
    const task = await Task.create({
      title,
      description,
      dueDate,
      status,
      priority,
      assignee,
      reporter,
      project,
      comments,
      attachments,
    });

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

const getTaskByProject = async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.params.projectid }).populate(
      "assignee reporter",
      "name email"
    );

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.status = req.body.status;
    await task.save();

    res.json({ message: "Task status updated", task });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

const commentOnTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).json({ message: "Task not found" });

    task.comments.push({
      user: req.params.userId,
      text: req.body.text,
      timestamp: new Date(),
    });

    await task.save();
    res.json({ message: "Comment added", task });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

const attachFile = async (req, res) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) return res.status(404).json({ msg: "Task not found" });

    task.attachments.push({
      file: req.file.originalname,
      filepath: req.file.path,
    });

    await task.save();

    res.json({ message: "Comment added", task });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = {
  attachFile,
  commentOnTask,
  updateTaskStatus,
  getTaskByProject,
  createTask,
};
