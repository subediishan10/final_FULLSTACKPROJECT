import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Login Successful!");
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <Link
              to="/"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none"
            >
              <X size={20} />
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            {/* Form */}

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <hr className="border border-base-content/10" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-2 outline-none rounded-md"
                {...register("email", { required: "Email is required" })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <hr className="border border-base-content/10" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 outline-none rounded-md"
                {...register("password", { required: "Password is required" })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Button & Signup */}
            <div className="flex justify-around items-center mt-4 gap-3">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-2 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
              <span>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
