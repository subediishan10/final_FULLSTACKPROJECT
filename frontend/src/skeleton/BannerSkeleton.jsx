import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function BannerSkeleton() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      {/* LEFT SIDE */}
      <div className="md:order-1 order-2 w-full md:w-1/2 mt-12 md:mt-32">
        <div className="space-y-12">
          {/* Heading */}
          <div>
            <Skeleton height={40} width="75%" />
            <Skeleton height={40} width="50%" style={{ marginTop: 8 }} />
          </div>

          {/* Paragraph */}
          <div>
            <Skeleton count={3} height={16} />
          </div>

          {/* Input */}
          <Skeleton height={48} width="65%" />
        </div>

        {/* Button */}
        <div className="mt-4">
          <Skeleton height={40} width={120} />
        </div>
      </div>

      {/* RIGHT SIDE (IMAGE) */}
      <div className="w-full order-1 md:w-1/2 flex items-center justify-center">
        <Skeleton height={350} width={350} />
      </div>
    </div>
  );
}

export default BannerSkeleton;
