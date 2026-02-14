import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Signup Successful!");
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div
          // id="my_modal_3"
          className="border border-base-content/10 shadow-md p-5 relative"
        >
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none"
              >
                <X size={20} />
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              {/**Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                {/**For daisy ui it is must cleaner code :border border-base-content/30 */}
                <hr className="border border-base-content/10" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-80 px-3 py-2 outline-none rounded-md"
                  {...register("name", { required: "Name is required" })}
                />
                <br />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
              {/*email*/}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                {/**For daisy ui it is must cleaner code :border border-base-content/30 */}
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
              {/*password*/}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <hr className="border border-base-content/10" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 outline-none rounded-md"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
              {/*Button*/}
              <div className="flex justify-around mt-4 items-center">
                <button
                  type="submit"
                  className=" cursor-pointer bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
                <span>
                  Have account?{""}
                  <Link
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                    }}
                  >
                    Login
                  </Link>
                </span>
              </div>
            </form>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
