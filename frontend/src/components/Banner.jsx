import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import banner from "../../public/book1.jpg";
import BannerSkeleton from "../skeleton/BannerSkeleton";

function Banner() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <BannerSkeleton />;
  }

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        {/* Left Content */}
        <motion.div
          className="md:order-1 order-2 w-full md:w-1/2 mt-12 md:mt-32"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-12">
            <motion.h1
              className="text-4xl font-bold"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Discover{" "}
              <span className="text-pink-500">Your Next Favorite Book</span>
            </motion.h1>

            <motion.p
              className="opacity-80"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Welcome to BookWebStore — your trusted online bookstore. Browse
              thousands of books across genres, from fiction and romance to
              self-development and educational. Find the perfect book and enjoy
              reading from the comfort of your home.
            </motion.p>

            <motion.label
              className="input validator"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="Enter your email to subscribe"
                required
              />
            </motion.label>
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Subscribe Now
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full order-1 md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={banner}
            alt=""
            className="md:w-92 md:h-92 rounded-xl"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </>
  );
}

export default Banner;
