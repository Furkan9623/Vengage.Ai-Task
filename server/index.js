const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const DB_CONNECT = require("./config/db");
const contact_router = require("./routes/contact-router");
const { createError, errorHandle } = require("./middleware/error-handle");
dotenv.config();
const app = express();
// middle ware
app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => res.send("<h1>Application Ready....</h1>"));
// router
app.use("/api/v1/contact", contact_router);
// global errror
app.use("*", async (req, res, next) =>
  next(
    createError(`${req.originalUrl} this url is not valid`, 500, "global error")
  )
);
const server = app.listen(8080, () =>
  console.log(`server run on port ${8080}`)
);
app.use(errorHandle);
DB_CONNECT().catch((er) => console.log(er));
server.on("listening", () => console.log("server connected..."));

server.on("error", (error) => console.log(error));
