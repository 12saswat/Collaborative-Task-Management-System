const Project = require("../models/Project");
const User = require("../models/User");

const createProject = async (req, res) => {
  const { name, description, members } = req.body;
  try {
    const project = await Project.create({ name, description, members });
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("member", "name email");
    res.json(projects);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

const addMember = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ msg: "Project not found" });

    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ msg: "User not found" });

    if (!project.members.includes(user._id)) {
      project.members.push(user._id);
      await project.save();
    }

    res.json({ message: "User added to project", project });
  } catch {
    res.status(500).json({ msg: "Server error" });
  }
};

const removeMember = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ msg: "Project not found" });

    project.members = project.members.filter(
      (member) => member.toString() != req.body.userId
    );
    await project.save();
    res.json({ msg: "User removed", project });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { removeMember, addMember, getProjects, createProject };
