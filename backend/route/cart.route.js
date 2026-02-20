import express from "express";
import {
  addTocart,
  getCart,
  updateQuantity,
  deleteCartItem,
} from "../controller/cart.controller.js";
const router = express.Router();

//Add item
router.post("/", addTocart);
router.get("/", getCart);

//Update quantity
router.put("/:id", updateQuantity);

//Remove item
router.delete("/:id", deleteCartItem);

export default router;
