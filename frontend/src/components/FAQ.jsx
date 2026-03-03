import React from "react";

function FAQ() {
  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "Browse books, add them to your cart, and proceed to checkout. Follow the payment instructions to complete your purchase.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major debit/credit cards, UPI, net banking, and selected digital wallets.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Orders are usually delivered within 3–7 business days depending on your location.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer:
        "Yes, orders can be cancelled or modified before they are shipped. Contact support immediately for assistance.",
    },
    {
      question: "How do I request a refund?",
      answer:
        "Refunds can be requested within 7 days of delivery if the product is damaged or incorrect.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-pink-500">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-sm bg-base-200"
          >
            <h2 className="font-semibold text-lg mb-2">{faq.question}</h2>
            <p className="text-sm opacity-80 leading-6">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
