import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CartSkeleton({ itemCount = 3 }) {
  return (
    <div className="min-h-screen bg-base-200 text-base-content py-10 px-4 md:px-16 mt-20">
      {/* Header Skeleton */}
      <div className="sticky top-16 z-50 py-6 mb-10 text-center bg-base-200 shadow-md border-b border-base-300">
        <Skeleton height={32} width={250} className="mx-auto mb-2" />{" "}
        {/* Title */}
        <Skeleton height={16} width="60%" className="mx-auto" />{" "}
        {/* Subtitle */}
      </div>

      {/* Cart Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-15">
        {/* LEFT SIDE - Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {Array.from({ length: itemCount }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center bg-base-100 p-6 rounded-lg shadow-md border border-base-300 gap-6 relative"
            >
              {/* Book Image */}
              <Skeleton height={144} width={112} className="rounded-md" />

              {/* Book Details */}
              <div className="flex-1 w-full space-y-2">
                <Skeleton height={20} width="60%" /> {/* Title */}
                <Skeleton height={16} width="40%" /> {/* Author */}
                <Skeleton height={16} width="50%" /> {/* Category */}
                <Skeleton height={20} width="30%" /> {/* Price */}
                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                  <Skeleton height={32} width={32} circle />
                  <Skeleton height={16} width={24} />
                  <Skeleton height={32} width={32} circle />
                </div>
              </div>

              {/* Remove Button */}
              <Skeleton
                height={22}
                width={22}
                circle
                className="absolute top-2 right-2"
              />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - Order Summary */}
        <div className="bg-base-100 p-6 rounded-lg shadow-md border border-base-300 h-fit sticky top-40">
          <Skeleton height={24} width="50%" className="mb-6" />{" "}
          {/* Order Summary Heading */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <Skeleton height={16} width={80} />
              <Skeleton height={16} width={40} />
            </div>
            <div className="flex justify-between">
              <Skeleton height={16} width={80} />
              <Skeleton height={16} width={40} />
            </div>
            <div className="flex justify-between">
              <Skeleton height={16} width={80} />
              <Skeleton height={16} width={40} />
            </div>
            <hr className="border-base-300" />
            <div className="flex justify-between text-lg font-bold">
              <Skeleton height={20} width={80} />
              <Skeleton height={20} width={60} />
            </div>
          </div>
          <Skeleton height={40} className="mt-6 rounded-md" />{" "}
          {/* Checkout Button */}
          <div className="flex items-center gap-2 mt-3 justify-center">
            <Skeleton height={15} width={15} circle />
            <Skeleton height={16} width={120} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSkeleton;
