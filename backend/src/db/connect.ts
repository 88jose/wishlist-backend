const mongoose = require('mongoose');
const Config = require("../config/config")

type MDB = {
   useUnifiedTopology: boolean;
   useNewUrlParser: boolean;
} 

function connectDB(){
   const options:MDB = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   };
   return mongoose.connect(Config.db.uri, options)
}


module.exports = connectDB