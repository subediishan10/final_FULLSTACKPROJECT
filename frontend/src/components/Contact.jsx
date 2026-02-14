import { Link } from "react-router-dom";
import Login from "./Login";
function Contact() {
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="border border-base-content/10 shadow-md p-5 ">
        <div className="">
          <h3 className="font-semibold text-2xl">Contact Us</h3>
          {/**Name */}
          <div className="mt-5 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-80 px-3 py-2 outline-none rounded-md border border-base-content/10"
            />
          </div>
          {/*email*/}
          <div className="mt-3 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-2 outline-none rounded-md border border-base-content/10"
            />
          </div>
          {/*password*/}
          <div className="mt-3 space-y-2">
            <span>Message</span>
            <br />
            <textarea
              placeholder="Enter your message"
              className="w-full h-30 px-3 py-1 outline-none rounded-md border border-base-content/10"
            />
          </div>
          {/*Button*/}
          <div className=" mt-5 items-center">
            <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200 cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
