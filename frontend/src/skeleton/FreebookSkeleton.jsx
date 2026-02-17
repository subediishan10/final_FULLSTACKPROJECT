import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function FreebookSkeleton() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-15 animate-pulse">
      {/* Heading */}
      <div className="mb-4">
        <Skeleton height={28} width={200} /> {/* h1 */}
        <Skeleton height={16} width="80%" className="mt-2" />{" "}
        {/* paragraph line 1 */}
        <Skeleton height={16} width="70%" className="mt-1" />{" "}
        {/* paragraph line 2 */}
      </div>

      {/* Carousel Skeleton */}
      <div className="mt-6 flex space-x-4 overflow-x-auto">
        {Array(6)
          .fill()
          .map((_, i) => (
            <div key={i} className="px-2 md:px-3 lg:px-4 w-60">
              <Skeleton height={200} /> {/* Card image */}
              <Skeleton height={20} width="80%" className="mt-2" />{" "}
              {/* Card title */}
              <Skeleton height={16} width="60%" className="mt-1" />{" "}
              {/* Card description */}
              <Skeleton
                height={36}
                width="50%"
                className="mt-2 rounded-md"
              />{" "}
              {/* Card button */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default FreebookSkeleton;
