import React, { useEffect, useState } from "react";
import FooterSkeleton from "../skeleton/FooterSkeleton";
import { Link } from "react-router-dom";

function Footer() {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShow(true), 50);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <FooterSkeleton />
  ) : (
    <div
      className={`transition-all duration-700 ease-in-out transform ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <footer className="bg-base-200 text-base-content border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand Section */}
            <div>
              <h2 className="text-2xl font-bold text-pink-500 mb-4">
                BOOKSTORE
              </h2>
              <p className="text-sm leading-6 opacity-80">
                Your one-stop destination for discovering amazing books across
                all genres. Read, explore, and grow with us.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    Categories
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>

              <p className="text-sm opacity-80 mb-4 leading-6">
                Need help with your orders, account, or policies? Our support
                team is here to assist you.
              </p>

              {/* Support Links */}
              <ul className="space-y-2 text-sm mb-4">
                <li>
                  <Link
                    to="/faq"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-conditions"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="hover:text-pink-500 transition-colors duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a className="hover:scale-110 hover:text-pink-500 transition-all duration-300 cursor-pointer">
                  {/* Twitter */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 
                    1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 
                    1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 
                    0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144
                    -1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616
                    -.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084
                    .626 1.956 2.444 3.379 4.6 3.419-2.07 
                    1.623-4.678 2.348-7.29 2.04 
                    2.179 1.397 4.768 2.212 7.548 2.212 
                    9.142 0 14.307-7.721 13.995-14.646 
                    .962-.695 1.797-1.562 2.457-2.549z"
                    />
                  </svg>
                </a>

                <a className="hover:scale-110 hover:text-pink-500 transition-all duration-300 cursor-pointer">
                  {/* YouTube */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path
                      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 
                    0-3.897.266-4.356 2.62-4.385 
                    8.816.029 6.185.484 8.549 4.385 
                    8.816 3.6.245 11.626.246 15.23 
                    0 3.897-.266 4.356-2.62 
                    4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 
                    12.816v-8l8 3.993-8 4.007z"
                    />
                  </svg>
                </a>

                <a className="hover:scale-110 hover:text-pink-500 transition-all duration-300 cursor-pointer">
                  {/* Facebook */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 
                    1.115-1.333h2.885v-5h-3.808c-3.596 
                    0-5.192 1.583-5.192 
                    4.615v3.385z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm opacity-70">
            © {new Date().getFullYear()} BOOKSTORE Pvt. Ltd. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
