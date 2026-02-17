import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function FooterSkeleton() {
  return (
    <div className="animate-pulse">
      <footer className="footer footer-horizontal footer-center text-base-content rounded p-10">
        {/* Navigation Links */}
        <nav className="grid grid-flow-col gap-4">
          <Skeleton width={80} height={20} />
          <Skeleton width={80} height={20} />
          <Skeleton width={80} height={20} />
          <Skeleton width={80} height={20} />
        </nav>

        {/* Social Icons */}
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Skeleton circle width={24} height={24} />
            <Skeleton circle width={24} height={24} />
            <Skeleton circle width={24} height={24} />
          </div>
        </nav>

        {/* Copyright */}
        <aside>
          <Skeleton width={250} height={16} className="mt-4" />
        </aside>
      </footer>
    </div>
  );
}

export default FooterSkeleton;
