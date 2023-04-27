const userRouter = require("express").Router()

const {signUp, getAllUsers, checkUser} = require("../controllers/user.controller")


userRouter
   .post("/signup", signUp)
   .get("/all", getAllUsers)
   .post("/check", checkUser)

module.exports = userRouter