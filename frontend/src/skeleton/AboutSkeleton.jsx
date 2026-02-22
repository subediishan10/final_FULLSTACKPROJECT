import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AboutSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      {/* Header Skeleton */}
      <div className="text-center mb-16">
        <Skeleton height={48} width={200} className="mx-auto mb-4" />{" "}
        {/* Title */}
        <Skeleton height={20} width="60%" className="mx-auto mb-3" />{" "}
        {/* Line 1 */}
        <Skeleton height={20} width="60%" className="mx-auto mb-3" />{" "}
        {/* Line 2 */}
        <Skeleton height={20} width="40%" className="mx-auto" /> {/* Line 3 */}
      </div>

      {/* Who We Are Skeleton */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <Skeleton height={24} width="30%" className="mb-4" />{" "}
          {/* Subheading */}
          <Skeleton height={16} width="100%" className="mb-3" />{" "}
          {/* Paragraph line 1 */}
          <Skeleton height={16} width="100%" className="mb-3" />{" "}
          {/* Paragraph line 2 */}
          <Skeleton height={16} width="80%" /> {/* Paragraph line 3 */}
        </div>
        <div>
          <Skeleton height={256} width="100%" borderRadius={16} /> {/* Image */}
        </div>
      </div>

      {/* What We Offer Skeleton */}
      <div className="mb-20">
        <Skeleton height={24} width="30%" className="mx-auto mb-12" />{" "}
        {/* Section heading */}
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-base-100 p-6 rounded-2xl shadow-md">
              <Skeleton height={20} width="60%" className="mb-3" />{" "}
              {/* Card title */}
              <Skeleton height={16} width="100%" /> {/* Card content */}
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision Skeleton */}
      <div className="text-center">
        <Skeleton height={24} width="25%" className="mx-auto mb-4" />{" "}
        {/* Mission title */}
        <Skeleton height={16} width="60%" className="mx-auto mb-3" />{" "}
        {/* Mission text line 1 */}
        <Skeleton height={16} width="60%" className="mx-auto mb-3" />{" "}
        {/* Mission text line 2 */}
        <Skeleton height={16} width="20%" className="mx-auto mb-8" />{" "}
        {/* Mission short line */}
        <Skeleton height={24} width="25%" className="mx-auto mb-4 mt-10" />{" "}
        {/* Vision title */}
        <Skeleton height={16} width="60%" className="mx-auto mb-3" />{" "}
        {/* Vision text line 1 */}
        <Skeleton height={16} width="40%" className="mx-auto mb-2" />{" "}
        {/* Vision text line 2 */}
      </div>
    </div>
  );
}

export default AboutSkeleton;
