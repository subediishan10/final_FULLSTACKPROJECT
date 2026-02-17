import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CourseSkeleton() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 animate-pulse">
      {/* Heading Section */}
      <div className="mt-28 text-center">
        <Skeleton height={40} width="60%" className="mx-auto" /> {/* h1 */}
        <Skeleton height={16} width="80%" className="mx-auto mt-6" />{" "}
        {/* paragraph line 1 */}
        <Skeleton height={16} width="70%" className="mx-auto mt-2" />{" "}
        {/* paragraph line 2 */}
        <Skeleton
          height={40}
          width={120}
          className="mx-auto mt-6 rounded-md"
        />{" "}
        {/* Back button */}
      </div>

      {/* Cards Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array(8) // assuming max 8 skeleton cards
          .fill()
          .map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton height={200} /> {/* Card image */}
              <Skeleton height={20} width="80%" /> {/* Card title */}
              <Skeleton height={16} width="60%" /> {/* Card description */}
              <Skeleton height={36} width="50%" /> {/* Card button */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default CourseSkeleton;
