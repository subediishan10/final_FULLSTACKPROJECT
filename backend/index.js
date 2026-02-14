import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;
//Middleware to parse JSON
app.use(express.json());

//Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

try {
  mongoose.connect(URI);
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}
//defining routes
app.use("/book", bookRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
