const { Schema, model } = require("mongoose");

const TaskSchema = new Schema({
   title: {
      type: String,
      required: [true, "title is required"],
   },
   description: {
      type: String,
      required: [true, "description are required"],
   },
});

const TaskModel = model("Task", TaskSchema);

module.exports = TaskModel;
