import React from "react";

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-pink-500">
        Privacy Policy
      </h1>

      <div className="space-y-6 text-sm leading-7 opacity-90">
        <p>
          At BOOKSTORE Pvt. Ltd., we value your privacy. This policy explains
          how we collect, use, and protect your personal information.
        </p>

        <h2 className="font-semibold text-lg">1. Information We Collect</h2>
        <p>
          We collect your name, email, phone number, shipping address, and
          payment details when you place an order or create an account.
        </p>

        <h2 className="font-semibold text-lg">
          2. How We Use Your Information
        </h2>
        <p>
          Your information is used to process orders, improve user experience,
          and communicate important updates about your purchases.
        </p>

        <h2 className="font-semibold text-lg">3. Data Protection</h2>
        <p>
          We implement industry-standard security measures to protect your
          personal information from unauthorized access.
        </p>

        <h2 className="font-semibold text-lg">4. Cookies</h2>
        <p>
          We use cookies to enhance your browsing experience and analyze site
          traffic.
        </p>

        <h2 className="font-semibold text-lg">5. Contact Us</h2>
        <p>
          If you have any questions regarding this policy, contact us at
          support@bookstore.com.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
