const express = require("express");
const {
  createProject,
  removeMember,
  addMember,
  getProjects,
} = require("../controllers/projectControler");
const router = express.Router();

router.post("/", createProject);
router.get("/", getProjects);
router.post("/:id/add-member", addMember);
router.post("/:id/remove-member", removeMember);

module.exports = router;
