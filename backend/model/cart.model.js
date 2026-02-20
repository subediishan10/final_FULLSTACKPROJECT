import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
  id: Number,
  title: String,
  author: String,
  category: String,
  price: Number,
  image: String,
  quantity: { type: Number, default: 1 },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
