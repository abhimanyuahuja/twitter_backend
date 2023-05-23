import express from "express";
import { connect } from "./config/database.js"
const app = express();


app.listen(3000, async () => {
  console.log("Server started");
  await connect();
  console.log("connected to mongo db");
});
