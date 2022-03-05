const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const compression = require("compression");
const log = require("./Log");

function start(options) {
  const app = express();
  log.info("Server - Starting Up");

  const { corsOrigin = "*" } = options;

  // Middleware
  const corsOptions = {
    origin: "*", // TODO : Change this to be a function that checks if corsOrigin variable has req.get('Origin')
    allowHeaders: "Accept, Content-Type, Origin, X-Requested-With",
  };
  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes
  app.options("*", cors()); // Handle Preflight Requests (if need be)

  app.get("/", (req, res, next) => {
    res.send("OK");
  });

  // Custom Error Handler
  app.use((err, req, res, next) => {
    // If we already streamed response, let express-default-error-handler handle it
    if (res.headersSent) {
      return next(err);
    }
    const status = err.status || 500;
    log.info({ err });
    res.status(status);
    return res.json({ status });
  });

  // Listen
  app.listen(3000);
}

module.exports = {
  start,
};
