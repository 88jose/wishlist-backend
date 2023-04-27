const UserModel = require("../models/user.model");
import { Response, Request } from "express";

const signUp = async (req: Request , res:Response): Promise<void> => {
   const { name, email } = req.body;
   try {
      const user = await UserModel.create({ name, email });
      res.status(200).send({ data: user });
   } catch (error) {
      res.status(500).send({ message: (error as Error).message });
   }
};

const getAllUsers = async (req: Request , res:Response): Promise<void> => {
   try {
      const users = await UserModel.find({});
      res.status(200).send({ data: users });
   } catch (error) {
      res.status(500).send({ message: (error as Error).message });
   }
};

const checkUser = async (req: Request , res:Response) => {
   const { name, email } = req.body;
   
   try {
      const user = await UserModel.findOne({ email });
      if (user) {
         return res.status(200).send({ msg: "ok", id: user._id });
      }

      const newUser = await UserModel.create({
         name,
         email,
      });

      res.status(201).send({ data: newUser });

   } catch (error) {
      res.status(500).send({ message: (error as Error).message });
   }
};

module.exports = {
   signUp,
   getAllUsers,
   checkUser,
};
