const taskRouter = require("express").Router()

const {saveTask, getTasksOfUser, deleteTask, updateTask} = require("../controllers/task.controller")

taskRouter
   .post("/create/:userID", saveTask)
   .get("/:userID", getTasksOfUser)
   .put("/:id", updateTask)
   .delete("/:id", deleteTask)

export default taskRouter
