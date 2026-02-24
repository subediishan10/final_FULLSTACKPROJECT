import mongoose from "mongoose";
const bookSchema = mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true }, // your custom book ID
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, default: 1 },
    image: { type: String },
    content: { type: String }, // optional: full book content
    content2: { type: String }, // optional: second page of content
    content3: { type: String }, // optional: third page of content
  },
  { timestamps: true },
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
