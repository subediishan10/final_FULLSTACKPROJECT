import { useEffect, useState } from "react";
import { Trash2, Plus, Minus, ShoppingCart, Lock } from "lucide-react";
import axios from "axios";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:4001/cart");
      console.log(res.data);
      setCartItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);

  // Increase Quantity
  const increaseQty = async (item) => {
    try {
      await axios.put(`http://localhost:4001/cart/${item.id}`, {
        quantity: item.quantity + 1,
      });
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  // Decrease Quantity
  const decreaseQty = async (item) => {
    if (item.quantity <= 1) return;

    try {
      await axios.put(`http://localhost:4001/cart/${item.id}`, {
        quantity: item.quantity - 1,
      });
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  // Remove Item
  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/cart/${id}`);
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  // Calculations
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = cartItems.length > 0 ? 50 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-16 mt-20">
      {/* Header */}
      <div className=" sticky  bg-gray-50 top-16 z-50  py-6 mb-10 text-center shadow-sm">
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
                key={item._id}
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
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={() => decreaseQty(item)}
                      className="p-1 text-gray-600 rounded bg-gray-200   cursor-pointer "
                    >
                      <Minus size={18} />
                    </button>
                    <span className=" text-gray-600 px-2">{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item)}
                      className="p-1 text-gray-600 rounded bg-gray-200  cursor-pointer"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item._id)}
                  className="text-red-500 hover:text-red-700 absolute top-2 right-2"
                >
                  <Trash2 size={22} />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Order Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-45">
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
