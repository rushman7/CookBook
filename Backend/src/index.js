// This file start the server. Also all logic for authentication, billing, etc... stay here
require("dotenv").config();
require("newrelic");
const createServer = require("./createServer");
const cors = require("cors");

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: [process.env.FRONTEND_URL, "https://your-cookbook.netlify.app]
    }
  },
  () =>
    console.log(
      `Server running at ${
        process.env.FRONTEND_URL
          ? "http://localhost:4000"
          : "https://your-cookbook.netlify.app"
      }`
    )
);
