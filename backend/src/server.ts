const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const userRouter = require("./routes/user.routes");
import taskRouter from "./routes/task.routes";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use("/user", userRouter);
app.use("/task", taskRouter);

module.exports = app;
