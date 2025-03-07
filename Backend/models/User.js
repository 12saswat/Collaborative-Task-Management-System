const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, requires: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["Admin", "Manager", "Member"],
      default: "Member",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
