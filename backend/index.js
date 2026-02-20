import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cartRoute from "./route/cart.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/cart", cartRoute);

//connect to MongoDB
try {
  mongoose.connect(URI);
  console.log("MongoDB connected successfully");
} catch (error) {
  console.error("Error connecting to MongoDB:", error);
}

//Start the server
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
