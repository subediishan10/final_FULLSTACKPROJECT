import React from "react";

function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-pink-500">
        Terms & Conditions
      </h1>

      <div className="space-y-6 text-sm leading-7 opacity-90">
        <p>
          By accessing and using BOOKSTORE Pvt. Ltd., you agree to comply with
          the following terms and conditions.
        </p>

        <h2 className="font-semibold text-lg">1. Use of Website</h2>
        <p>
          You agree to use this website for lawful purposes only and not to
          engage in any activity that disrupts the service.
        </p>

        <h2 className="font-semibold text-lg">2. Orders & Payments</h2>
        <p>
          All orders are subject to availability and confirmation of payment.
          Prices may change without prior notice.
        </p>

        <h2 className="font-semibold text-lg">3. Shipping Policy</h2>
        <p>
          Delivery timelines are estimates and may vary depending on location
          and external factors.
        </p>

        <h2 className="font-semibold text-lg">4. Returns & Refunds</h2>
        <p>
          Returns are accepted within 7 days of delivery for damaged or
          incorrect products.
        </p>

        <h2 className="font-semibold text-lg">5. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time without prior
          notice.
        </p>
      </div>
    </div>
  );
}

export default TermsConditions;
