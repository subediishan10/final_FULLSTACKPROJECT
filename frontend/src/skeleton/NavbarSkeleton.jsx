import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function NavbarSkeleton() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 bg-base-500">
      <div className="navbar shadow-sm">
        {/* Logo */}
        <div className="navbar-start">
          <Skeleton height={30} width={120} />
        </div>

        {/* Menu (desktop) */}
        <div className="navbar-center hidden lg:flex gap-6">
          <Skeleton width={60} />
          <Skeleton width={60} />
          <Skeleton width={60} />
          <Skeleton width={60} />
          <Skeleton width={60} />
          <Skeleton width={60} />
        </div>

        {/* Right side */}
        <div className="navbar-end gap-4">
          <Skeleton width={150} height={35} />
          <Skeleton width={80} height={35} />
        </div>
      </div>
    </div>
  );
}

export default NavbarSkeleton;
