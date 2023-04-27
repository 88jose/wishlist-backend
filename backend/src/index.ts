const app = require("./server");
const config = require("./config/config");
const DBconnect = require("./db/connect");

DBconnect().then(async function onServerInit() {
   console.log("Database connected");

   app.listen(config.app.PORT, () => {
      console.log("Server is running on port " + config.app.PORT);
   });
});
