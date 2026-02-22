import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CategorySkeleton({ count = 6 }) {
  return (
    <div>
      {/* Header Skeleton */}
      <div className="text-center mb-12">
        <Skeleton height={32} width="66%" className="mx-auto mb-4" />{" "}
        {/* Title */}
        <Skeleton height={16} width="50%" className="mx-auto" />{" "}
        {/* Subtitle */}
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="rounded-lg p-6 border border-base-content/15"
          >
            <Skeleton
              circle={true}
              height={48}
              width={48}
              className="mx-auto mb-4"
            />{" "}
            {/* Icon */}
            <Skeleton height={16} width="75%" className="mx-auto" />{" "}
            {/* Category name */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySkeleton;
