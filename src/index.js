require("dotenv").config(); // Gives us access to .env variables
const log = require("./Log"); // Logging Configuration
const Server = require("./Server");

const logAndShutdown = (err) => {
  console.log("Fatal Error", err);
  log.fatal(err, "Fatal Error");
  setTimeout(() => {
    process.exit(1);
  }, 100);
};

// Register Exception Event Handlers
process.on("uncaughtException", logAndShutdown); // For Unhandled Synchronous Code
process.on("unhandledRejection", logAndShutdown); // For Unhandled Promises

Server.start({});
