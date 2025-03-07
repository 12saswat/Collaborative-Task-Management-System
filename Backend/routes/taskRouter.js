const express = require("express");
const router = express.Router();

const {
  createTask,
  getTaskByProject,
  updateTaskStatus,
  commentOnTask,
  attachFile,
} = require("../controllers/taskController");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/", createTask);
router.get("/:projectId", getTaskByProject);
router.put("/:taskId/status", updateTaskStatus);
router.post("/:taskId/comment", commentOnTask);
router.post("/:taskId/attach", upload.single("file"), attachFile);

module.exports = router;
