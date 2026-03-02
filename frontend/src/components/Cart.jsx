import { Trash2, Plus, Minus, ShoppingCart, Lock } from "lucide-react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CartSkeleton from "../skeleton/Cartskeleton";
import { useState, useEffect } from "react";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [updatingItemId, setUpdatingItemId] = useState(null);

  const FREE_SHIPPING_THRESHOLD = 1000;

  // ================= AVAILABLE COUPONS =================
  const AVAILABLE_COUPONS = [
    {
      code: "BOOK10",
      type: "percentage",
      value: 10,
      minCart: 500,
      expires: "2026-12-31",
    },
    {
      code: "FLAT100",
      type: "flat",
      value: 100,
      minCart: 1000,
      expires: "2026-12-31",
    },
  ];

  // ================= FETCH CART =================
  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:4001/cart");
      setCartItems(res.data);
    } catch (err) {
      toast.error("Failed to load cart");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
    setTimeout(() => setShow(true), 200);
  }, []);

  // ================= CALCULATIONS =================
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping =
    subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : subtotal > 0 ? 50 : 0;

  const tax = subtotal * 0.05;
  const total = Math.max(subtotal + shipping + tax - discount, 0);

  // ================= AUTO REMOVE COUPON IF INVALID =================
  useEffect(() => {
    if (discount > 0) {
      const currentCoupon = AVAILABLE_COUPONS.find(
        (c) => c.code === coupon.toUpperCase(),
      );

      if (currentCoupon && subtotal < currentCoupon.minCart) {
        setDiscount(0);
        setCoupon("");
        toast.error("Coupon removed (cart value changed)");
      }
    }
  }, [subtotal]);

  // ================= QUANTITY =================
  const increaseQty = async (item) => {
    try {
      setUpdatingItemId(item.id);
      await axios.put(`http://localhost:4001/cart/${item.id}`, {
        quantity: item.quantity + 1,
      });
      fetchCart();
    } catch {
      toast.error("Failed to update quantity");
    } finally {
      setUpdatingItemId(null);
    }
  };

  const decreaseQty = async (item) => {
    if (item.quantity <= 1) return;

    try {
      setUpdatingItemId(item.id);
      await axios.put(`http://localhost:4001/cart/${item.id}`, {
        quantity: item.quantity - 1,
      });
      fetchCart();
    } catch {
      toast.error("Failed to update quantity");
    } finally {
      setUpdatingItemId(null);
    }
  };

  const removeItem = async (id) => {
    if (!window.confirm("Remove this item?")) return;

    try {
      await axios.delete(`http://localhost:4001/cart/${id}`);
      toast.success("Item removed");
      fetchCart();
    } catch {
      toast.error("Failed to remove item");
    }
  };

  const clearCart = async () => {
    if (!window.confirm("Clear entire cart?")) return;

    try {
      await axios.delete("http://localhost:4001/cart");
      toast.success("Cart cleared");
      setDiscount(0);
      setCoupon("");
      fetchCart();
    } catch {
      toast.error("Failed to clear cart");
    }
  };

  // ================= APPLY COUPON =================
  const applyCoupon = () => {
    if (!coupon.trim()) {
      toast.error("Enter coupon code");
      return;
    }

    const enteredCode = coupon.trim().toUpperCase();
    const foundCoupon = AVAILABLE_COUPONS.find((c) => c.code === enteredCode);

    if (!foundCoupon) {
      toast.error("Invalid Coupon Code");
      return;
    }

    if (new Date() > new Date(foundCoupon.expires)) {
      toast.error("Coupon Expired");
      return;
    }

    if (subtotal < foundCoupon.minCart) {
      toast.error(`Minimum cart value ₹${foundCoupon.minCart} required`);
      return;
    }

    if (discount > 0) {
      toast.error("Coupon already applied");
      return;
    }

    let calculatedDiscount = 0;

    if (foundCoupon.type === "percentage") {
      calculatedDiscount = (subtotal * foundCoupon.value) / 100;
    } else {
      calculatedDiscount = foundCoupon.value;
    }

    setDiscount(calculatedDiscount);
    toast.success(`Coupon Applied 🎉 Saved ₹${calculatedDiscount}`);
  };

  const removeCoupon = () => {
    setDiscount(0);
    setCoupon("");
    toast.success("Coupon Removed");
  };

  // ================= CHECKOUT =================
  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty");
      return;
    }

    try {
      setCheckoutLoading(true);

      const orderData = {
        items: cartItems,
        subtotal,
        shipping,
        tax,
        discount,
        total,
        coupon: discount > 0 ? coupon.toUpperCase() : null,
        paymentMethod: "COD",
        status: "Pending",
      };

      await axios.post("http://localhost:4001/orders", orderData);

      toast.success("Order placed successfully 🎉");

      await axios.delete("http://localhost:4001/cart");

      navigate("/order-success");
    } catch {
      toast.error("Checkout failed");
    } finally {
      setCheckoutLoading(false);
    }
  };

  if (loading) return <CartSkeleton itemCount={3} />;

  return (
    <div
      className={`min-h-screen py-10 px-4 md:px-16 mt-20 transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* HEADER */}
      <div className="py-6 mb-10 text-center shadow-md rounded-lg">
        <h1 className="text-3xl lg:text-4xl font-bold text-pink-500 flex items-center justify-center gap-3">
          <ShoppingCart size={32} />
          Your Shopping Cart ({cartItems.length} items)
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center bg-base-100 p-10 rounded-lg shadow-md">
          <ShoppingCart size={60} className="mx-auto opacity-50 mb-4" />
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <Link
            to="/courses"
            className="mt-6 inline-block bg-primary text-white px-6 py-2 rounded-md"
          >
            Browse Books
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-5 md:space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row gap-4 bg-base-100 p-4 md:p-6 rounded-lg shadow-md"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-32 md:w-28 md:h-36 object-cover rounded-md mx-auto md:mx-0"
                />

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-semibold text-base md:text-lg">
                    {item.title}
                  </h2>

                  <p className="opacity-70 text-sm">{item.author}</p>

                  <p className="text-pink-500 font-bold mt-2">₹{item.price}</p>

                  {/* Quantity Controls */}
                  <div className="flex justify-center md:justify-start items-center gap-3 mt-3">
                    <button
                      onClick={() => decreaseQty(item)}
                      className="p-2 bg-base-300 rounded"
                    >
                      <Minus size={16} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item)}
                      className="p-2 bg-base-300 rounded"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 self-center md:self-start"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-red-500 underline text-sm block text-center md:text-left"
            >
              Clear Cart
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-base-100 p-5 md:p-6 rounded-lg shadow-md h-fit lg:sticky lg:top-28">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-center md:text-left">
              Order Summary
            </h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-green-500">
                  <span>Discount</span>
                  <span>-₹{discount.toFixed(2)}</span>
                </div>
              )}

              <hr />

              <div className="flex justify-between font-bold text-base md:text-lg">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Coupon */}
            <div className="mt-5">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Coupon Code"
                className="w-full px-3 py-2 border rounded-md bg-base-200"
              />
              <button
                onClick={applyCoupon}
                className="mt-2 w-full bg-pink-500 text-white py-2 rounded-md"
              >
                Apply
              </button>
            </div>

            {/* Checkout */}
            <button
              onClick={handleCheckout}
              disabled={checkoutLoading}
              className="mt-6 w-full bg-primary text-white py-3 rounded-md disabled:opacity-60"
            >
              {checkoutLoading ? "Processing..." : "Checkout"}
            </button>

            <div className="flex justify-center items-center gap-2 text-xs mt-4 opacity-60">
              <Lock size={14} />
              Secure Payments
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
