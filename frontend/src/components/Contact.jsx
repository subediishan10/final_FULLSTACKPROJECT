import { useEffect, useState } from "react";

function Contact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={`border border-base-content/10 shadow-md p-5 transform transition-all duration-700 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div>
          <h3 className="font-semibold text-2xl transition duration-500 hover:text-pink-500">
            Contact Us
          </h3>

          {/* Name */}
          <div className="mt-5 space-y-2 transition-all duration-500">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-80 px-3 py-2 outline-none rounded-md border border-base-content/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
            />
          </div>

          {/* Email */}
          <div className="mt-3 space-y-2 transition-all duration-500">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-2 outline-none rounded-md border border-base-content/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
            />
          </div>

          {/* Message */}
          <div className="mt-3 space-y-2 transition-all duration-500">
            <span>Message</span>
            <br />
            <textarea
              placeholder="Enter your message"
              className="w-full h-30 px-3 py-1 outline-none rounded-md border border-base-content/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
            />
          </div>

          {/* Button */}
          <div className="mt-5 items-center">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 hover:scale-105 active:scale-95 transform transition duration-300 cursor-pointer shadow-md hover:shadow-lg">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
