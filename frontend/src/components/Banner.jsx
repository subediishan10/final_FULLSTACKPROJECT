import React, { useEffect, useState } from "react";
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
        <div className="md:order-1 order-2 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p>
              Emmet Abbreviation Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Vel quo aliquid autem magni, eligendi placeat ex
              dolorum soluta mollitia impedit architecto voluptas provident
              molestiae earum maiores illum eius delectus sapiente.
            </p>

            <label className="input validator">
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
              <input type="email" placeholder="Email" required />
            </label>
          </div>
          <button className="btn btn-secondary mt-4">Secondary</button>
        </div>
        <div className="w-full order-1 md:w-1/2 flex items-center justify-center">
          <img src={banner} className="md:w-92 md:h-92 " alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
