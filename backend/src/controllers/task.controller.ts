const TaskModel = require("../models/task.model")
const UserModel = require("../models/user.model")
import { Response, Request } from "express";


const saveTask = async (req: Request , res:Response):Promise<void> => {
   const { title, description } = req.body
   const { userID } = req.params
   
   try {
      
      const createdTask = await TaskModel.create({
         title,
         description
      })

      const user = await UserModel.findById(userID)

      user.tasks.push(createdTask._id)

      await user.save()

      res.status(201).send({data: createdTask})

   } catch (error) {
      res.status(500).send({msg: (error as Error).message})
   }
}


const getTasksOfUser = async (req: Request , res:Response):Promise<void>  => {
   const { userID } = req.params

   try {
      const user = await UserModel.findById(userID).populate("tasks")

      res.status(200).send({data:user.tasks})
   } catch (error) {
      res.status(500).send({msg: (error as Error).message})
   }
}

const updateTask = async (req: Request , res:Response):Promise<void> => {
   const { id } = req.params
   const { userID } = req.body
   const { title, description } = req.body
   const fields = { title, description }
   try {
      const task = await TaskModel.findByIdAndUpdate(id, fields, { new: true })
      const user = await UserModel.findById(userID)
      user.tasks.push(task._id)
      await user.save()
      res.status(200).send({msg: "updated task"})
   }
   catch (error) {
      res.status(500).send({msg: (error as Error).message})
   }
};

const deleteTask = async(req: Request, res:Response):Promise<void> => {
   const { id } = req.params
   console.log(id)
   const  { userID } = req.body
   console.log(userID)


   try {
      await TaskModel.findByIdAndDelete(id)
      const user = await UserModel.findById(userID)
      user.tasks.pull(id)
      await user.save()

      res.status(200).send({msg: "deleted task"})
   } catch (error) {
      res.status(500).send({msg: (error as Error).message})
   }
}


module.exports = {
   saveTask, 
   getTasksOfUser,
   deleteTask,
   updateTask
}
