import { useState } from "react";
import { Trash2, Plus, Minus, ShoppingCart, Lock } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Science Fiction",
      price: 499,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/81wgcld4wxL.jpg",
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Biography",
      price: 399,
      quantity: 2,
      image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      category: "Romance",
      price: 350,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/81OthjkJBuL.jpg",
    },
    {
      id: 4,
      title: "The Martian",
      author: "Andy Weir",
      category: "Science Fiction",
      price: 450,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?fit=crop&w=500&q=80",
    },
    {
      id: 5,
      title: "The Lean Startup",
      author: "Eric Ries",
      category: "Business",
      price: 520,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg",
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Business",
      price: 450,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
    {
      id: 7,
      title: "Dune",
      author: "Frank Herbert",
      category: "Science Fiction",
      price: 600,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/91QozB3P3BL.jpg",
    },
    {
      id: 8,
      title: "Charlotte's Web",
      author: "E.B. White",
      category: "Children",
      price: 300,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/81zv7Qh2CwL.jpg",
    },
    {
      id: 9,
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      category: "Self Development",
      price: 480,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/71AcjZ0uwFL.jpg",
    },
    {
      id: 10,
      title: "Gone Girl",
      author: "Gillian Flynn",
      category: "Mystery",
      price: 400,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg",
    },
    {
      id: 11,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      category: "Biography",
      price: 550,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/71a6vYTdEyL.jpg",
    },
    {
      id: 12,
      title: "The Cat in the Hat",
      author: "Dr. Seuss",
      category: "Children",
      price: 250,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/81ReeHk0xHL.jpg",
    },
    {
      id: 13,
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      category: "Mystery",
      price: 420,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/81Feyj3C0lL.jpg",
    },
    {
      id: 14,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      category: "Educational",
      price: 899,
      quantity: 1,
      image: "https://m.media-amazon.com/images/I/81e-7hT8cdL.jpg",
    },
  ]);

  // Increase Quantity
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = 50;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16 mt-20 ">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-pink-500 flex items-center justify-center gap-3">
          <ShoppingCart size={32} /> Your Shopping Cart
        </h1>
        <p className="text-gray-500 mt-2">
          Review your selected books before checkout
        </p>
      </div>

      {cartItems.length === 0 ? (
        // Empty Cart
        <div className="text-center bg-white p-10 rounded-lg shadow-md">
          <ShoppingCart size={60} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-700">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mt-2">
            Looks like you haven’t added any books yet.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Browse Books
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-15">
          {/* LEFT SIDE - Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center bg-white p-6 rounded-lg shadow-md gap-6 relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-36 object-cover rounded-md"
                />

                <div className="flex-1 w-full">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-500">{item.author}</p>
                  <p className="text-gray-500">{item.category}</p>
                  <p className="text-pink-500 font-bold mt-2">₹{item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 absolute top-2 right-2"
                >
                  <Trash2 size={22} />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Order Summary
            </h2>

            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>

              <hr />

              <div className="flex justify-between text-lg font-bold text-gray-800">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold cursor-pointer">
              Proceed to Checkout
            </button>
            <div className="flex text-sm text-gray-400 mt-3 text-center justify-center items-center gap-1">
              <span>
                <Lock size={15} />
              </span>
              <p>Secure Payment Guaranteed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
