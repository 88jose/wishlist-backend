
import { ConfigurationObject } from "../interfaces/config";
require('dotenv').config();

const ENV: string = process.env.NODE_ENV || "development";

const CONFIG: ConfigurationObject = {
   development: {
      app: {
         PORT: Number(process.env.PORT) || 4001,
      },
      db: {
         uri: String(process.env.MONGODB_URI),
      },
   },
   production: {
      app: {
         PORT: Number(process.env.PORT) || 8082,
      },
      db: {
         uri: String(process.env.MONGODB_URI),
      },
   },
};

module.exports = CONFIG[ENV];