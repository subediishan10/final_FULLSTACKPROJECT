import { useEffect, useState } from "react";
import { Trash2, Plus, Minus, ShoppingCart, Lock } from "lucide-react";
import axios from "axios";
import CartSkeleton from "../skeleton/Cartskeleton";
import toast from "react-hot-toast";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:4001/cart");
      setCartItems(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCart();
    setTimeout(() => setShow(true), 200);
  }, []);

  if (loading) return <CartSkeleton itemCount={3} />;

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

  const removeItem = async (id) => {
    try {
      await axios.delete(`http://localhost:4001/cart/${id}`);
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = cartItems.length > 0 ? 50 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div
      className={`min-h-screen text-base-content py-10 px-4 md:px-16 mt-20 transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* Header */}
      <div className="py-6 mb-10 text-center shadow-md transition-all duration-500 hover:shadow-xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-pink-500 flex items-center justify-center gap-3">
          <ShoppingCart size={32} className="animate-bounce" />
          Your Shopping Cart
        </h1>
        <p className="opacity-70 mt-2">
          Review your selected books before checkout
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center bg-base-100 p-10 rounded-lg shadow-md border border-base-300 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
          <ShoppingCart
            size={60}
            className="mx-auto opacity-50 mb-4 animate-pulse"
          />
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="opacity-70 mt-2">
            Looks like you haven’t added any books yet.
          </p>
          <button className="mt-6 bg-primary hover:bg-primary-focus text-white px-6 py-2 rounded-md transition transform hover:scale-105 active:scale-95">
            Browse Books
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-15">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item, index) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-center bg-base-100 p-6 rounded-lg shadow-md border border-base-300 gap-6 relative transition-all duration-500 hover:shadow-xl hover:scale-[1.01]"
                style={{
                  animation: `fadeInUp 0.5s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-36 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                />

                <div className="flex-1 w-full">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="opacity-70">{item.author}</p>
                  <p className="opacity-70">{item.category}</p>
                  <p className="text-pink-500 font-bold mt-2">₹{item.price}</p>

                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={() => decreaseQty(item)}
                      className="p-1 cursor-pointer rounded bg-base-300 hover:bg-base-400 transition transform hover:scale-110"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item)}
                      className="p-1 cursor-pointer rounded bg-base-300 hover:bg-base-400 transition transform hover:scale-110"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() =>
                    toast(
                      (t) => (
                        <div className="p-4 w-72 rounded-xl">
                          <h3 className="text-lg font-semibold text-red-500 mb-2">
                            Delete Item
                          </h3>

                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                            Are you sure you want to delete this item?
                          </p>

                          <div className="flex justify-end gap-3">
                            <button
                              onClick={() => toast.dismiss(t.id)}
                              className="px-3 py-1 cursor-pointer rounded-md bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500 transition"
                            >
                              Cancel
                            </button>

                            <button
                              onClick={() => {
                                removeItem(item.id);
                                toast.dismiss(t.id);
                              }}
                              className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-700 transition cursor-pointer"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ),
                      {
                        id: "delete-confirm",
                        duration: Infinity,
                        position: "top-center",
                      },
                    )
                  }
                  className="text-red-500 cursor-pointer hover:text-red-700 absolute top-2 right-2 transition transform hover:scale-125"
                >
                  <Trash2 size={22} />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-base-100 p-6 rounded-lg shadow-md border border-base-300 h-fit sticky top-40 transition-all duration-500 hover:shadow-xl hover:scale-[1.02]">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-3 opacity-70">
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
              <div className="flex justify-between text-lg font-bold opacity-90">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-primary cursor-pointer hover:bg-primary-focus text-white py-3 rounded-md font-semibold transition transform hover:scale-105 active:scale-95">
              Proceed to Checkout
            </button>

            <div className="flex text-sm opacity-50 mt-3 justify-center items-center gap-1">
              <Lock size={15} />
              <p>Secure Payment Guaranteed</p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Cart;
