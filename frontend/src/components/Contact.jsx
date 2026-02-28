// import { useEffect, useState } from "react";

// function Contact() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(true);
//     }, 200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <div
//         className={`border border-base-content/10 shadow-md p-5 transform transition-all duration-700 ease-out ${
//           show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <div>
//           <h3 className="font-semibold text-2xl transition duration-500 hover:text-pink-500">
//             Contact Us
//           </h3>

//           {/* Name */}
//           <div className="mt-5 space-y-2 transition-all duration-500">
//             <span>Name</span>
//             <br />
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-80 px-3 py-2 outline-none rounded-md border border-base-content/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
//             />
//           </div>

//           {/* Email */}
//           <div className="mt-3 space-y-2 transition-all duration-500">
//             <span>Email</span>
//             <br />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="w-80 px-3 py-2 outline-none rounded-md border border-base-content/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
//             />
//           </div>

//           {/* Message */}
//           <div className="mt-3 space-y-2 transition-all duration-500">
//             <span>Message</span>
//             <br />
//             <textarea
//               placeholder="Enter your message"
//               className="w-full h-30 px-3 py-1 outline-none rounded-md border border-base-content/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition duration-300"
//             />
//           </div>

//           {/* Button */}
//           <div className="mt-5 items-center">
//             <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 hover:scale-105 active:scale-95 transform transition duration-300 cursor-pointer shadow-md hover:shadow-lg">
//               Submit
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import { useEffect, useState } from "react";

function Contact() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200 px-4 mt-25">
      <div
        className={`w-full max-w-md border border-base-content/10 bg-base-100 rounded-xl shadow-lg p-8 transform transition-all duration-700 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <h3 className="font-semibold text-3xl text-center transition duration-500 text-pink-500">
            Contact Us
          </h3>

          <p className="text-sm text-gray-500 mt-2 text-center">
            Have questions, feedback, or partnership inquiries? We'd love to
            hear from you.
          </p>

          {/* Contact Info */}
          <div className="mt-4 text-sm text-gray-500 space-y-1 text-center">
            <p>Email: support@yourbookstore.com</p>
            <p>Phone: +977-98XXXXXXXX</p>
            <p>Location: Kathmandu, Nepal</p>
          </div>

          {/* Name */}
          <div className="mt-6 space-y-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full px-3 py-2 outline-none rounded-md border border-base-content/10 focus:border-pink-300   transition duration-300"
            />
          </div>

          {/* Email */}
          <div className="mt-4 space-y-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 outline-none rounded-md border border-base-content/10 focus:border-pink-300 transition duration-300"
            />
          </div>

          {/* Subject */}
          <div className="mt-4 space-y-2">
            <label>Subject</label>
            <select
              required
              className="w-full px-3 py-2 rounded-md border border-base-content/10 
  bg-base-100 text-base-content
  dark:bg-base-200 dark:text-white
  focus:border-pink-300
  transition duration-300"
            >
              <option
                value=""
                className="text-black dark:text-white bg-white dark:bg-gray-500"
              >
                Select a subject
              </option>
              <option className="text-black dark:text-white bg-white dark:bg-gray-800">
                General Inquiry
              </option>
              <option className="text-black dark:text-white bg-white dark:bg-gray-800">
                Order Issue
              </option>
              <option className="text-black dark:text-white bg-white dark:bg-gray-800">
                Book Suggestion
              </option>
              <option className="text-black dark:text-white bg-white dark:bg-gray-800">
                Partnership
              </option>
            </select>
          </div>

          {/* Message */}
          <div className="mt-4 space-y-2">
            <label>Message</label>
            <textarea
              required
              placeholder="Enter your message"
              className="w-full h-28 px-3 py-2 outline-none rounded-md border border-base-content/10 focus:border-pink-300 transition duration-300"
            />
          </div>

          {/* Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-pink-500 text-white rounded-md py-2 hover:bg-pink-700 hover:scale-105 active:scale-95 transform transition duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <p className="text-green-500 text-sm mt-4 text-center">
              ✅ Thank you! Your message has been sent successfully.
            </p>
          )}

          {/* Privacy Note */}
          <p className="text-xs text-gray-400 mt-6 text-center">
            Your information is safe and will never be shared with third
            parties.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
