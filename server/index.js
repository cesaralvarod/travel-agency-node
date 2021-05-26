import express from "express";
import router from "./routes/index.js";
import path from "path";
import db from "./config/db.js";
import dotenv from "dotenv";

dotenv.config({ path: "variables.env" });

const app = express();

// DB connect

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));

// Set __dirname

const __dirname = path.resolve();

// Set port

app.set("host", process.env.HOST || "0.0.0");
app.set("port", process.env.PORT || 4000);

// Set dir views

app.set("views", path.join(__dirname, "server/views"));

// Set dir public

app.use(express.static("public"));

// Pug

app.set("view engine", "pug");

// Middleware year

app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nameWebSite = "Travels Agency";
  next();
});

// Middleware data form

app.use(express.urlencoded({ extend: true }));

// Add router

app.use("/", router);

// Run server

app.listen(app.get("port"), app.get("host"), () => {
  console.log("Server runing on " + app.get("host") + ":" + app.get("port"));
});
