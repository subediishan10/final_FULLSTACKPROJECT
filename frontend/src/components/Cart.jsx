import { useEffect, useState } from "react";
import { Trash2, Plus, Minus, ShoppingCart, Lock } from "lucide-react";
import axios from "axios";
import CartSkeleton from "../skeleton/Cartskeleton";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart items from backend
  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:4001/cart");
      console.log(res.data);
      setCartItems(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (loading) return <CartSkeleton itemCount={3} />;
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
    <div className="min-h-screen  text-base-content py-10 px-4 md:px-16 mt-20 transition-colors duration-300">
      {/* Header */}
      <div className="top-16  py-6 mb-10 text-center shadow-md  transition">
        <h1 className="text-3xl lg:text-4xl font-bold text-pink-500 flex items-center justify-center gap-3">
          <ShoppingCart size={32} /> Your Shopping Cart
        </h1>
        <p className="text-base-content opacity-70 mt-2">
          Review your selected books before checkout
        </p>
      </div>

      {cartItems.length === 0 ? (
        // Empty Cart
        <div className="text-center bg-base-100 p-10 rounded-lg shadow-md border border-base-300 transition">
          <ShoppingCart
            size={60}
            className="mx-auto text-base-content opacity-50 mb-4"
          />
          <h2 className="text-2xl font-semibold text-base-content">
            Your cart is empty
          </h2>
          <p className="opacity-70 mt-2">
            Looks like you haven’t added any books yet.
          </p>
          <button className="mt-6 bg-primary hover:bg-primary-focus text-white px-6 py-2 rounded-md transition">
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
                className="flex flex-col sm:flex-row items-center bg-base-100 p-6 rounded-lg shadow-md border border-base-300 gap-6 relative transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-36 object-cover rounded-md"
                />

                <div className="flex-1 w-full">
                  <h2 className="text-xl font-semibold text-base-content">
                    {item.title}
                  </h2>
                  <p className="text-base-content opacity-70">{item.author}</p>
                  <p className="text-base-content opacity-70">
                    {item.category}
                  </p>
                  <p className="text-pink-500 font-bold mt-2">₹{item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={() => decreaseQty(item)}
                      className="p-1 rounded bg-base-300 hover:bg-base-400 transition cursor-pointer"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item)}
                      className="p-1 rounded bg-base-300 hover:bg-base-400 transition cursor-pointer"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-error hover:text-error-focus absolute top-2 right-2 transition cursor-pointer"
                >
                  <Trash2 size={22} />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Order Summary */}
          <div className="bg-base-100 p-6 rounded-lg shadow-md border border-base-300 h-fit sticky top-40 transition">
            <h2 className="text-2xl font-bold mb-6 text-base-content">
              Order Summary
            </h2>

            <div className="space-y-3 text-base-content opacity-70">
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
              <hr className="border-base-300" />
              <div className="flex justify-between text-lg font-bold text-base-content opacity-90">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-primary hover:bg-primary-focus text-white py-3 rounded-md font-semibold transition cursor-pointer">
              Proceed to Checkout
            </button>

            <div className="flex text-sm text-base-content opacity-50 mt-3 justify-center items-center gap-1">
              <Lock size={15} />
              <p>Secure Payment Guaranteed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
