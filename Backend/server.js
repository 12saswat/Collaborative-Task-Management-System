const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./config/db");
require("dotenv").config();
const port = process.env.PORT || 5000;

connectDb();

app.use(express.json());
app.use(cors());

app.use("/api/users", require("./routes/userRouter"));
app.use("/api/projects", require("./routes/projectRouter"));
app.use("/api/tasks", require("./routes/taskRouter"));

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
