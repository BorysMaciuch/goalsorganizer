import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/goals";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(`${uri}`, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongoDB database connection established successfully");
});

app.use("/goals", router);
app.get('/', (req, res) => { res.send('Hello from Express!')

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
