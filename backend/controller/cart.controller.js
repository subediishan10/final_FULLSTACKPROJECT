import Carts from "../model/cart.model.js";

// Add / Update Carts Item
const addTocart = async (req, res) => {
  try {
    const { id, title, author, category, price, image, quantity } = req.body;

    // Check if item already exists in cart
    let existing = await Carts.findOne({ id });
    if (existing) {
      existing.quantity += quantity;
      await existing.save();
      return res.status(200).json({ message: "Carts updated" });
    }

    const cartItem = new Carts({
      id: id,
      title: title,
      author: author,
      category: category,
      price: price,
      image: image,
      quantity: quantity,
    });

    await cartItem.save();

    res.status(201).json({ message: "Book added to cart" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET ALL CART ITEMS
const getCart = async (req, res) => {
  try {
    const items = await Carts.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE QUANTITY
const updateQuantity = async (req, res) => {
  try {
    const { quantity } = req.body;

    const updated = await Carts.findOneAndUpdate(
      { id: req.params.id },
      { quantity },
      { new: true },
    );

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE ITEM
const deleteCartItem = async (req, res) => {
  try {
    await Carts.findOneAndDelete({ id: req.params.id });
    res.status(200).json({ message: "Item removed" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export { deleteCartItem, updateQuantity, getCart, addTocart };
