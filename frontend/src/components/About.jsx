import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content px-6 md:px-20 py-16 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6">
            About Our Online Book Store
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            Welcome to BookWebStore — your trusted destination for discovering,
            exploring, and purchasing books online. We bring stories, knowledge,
            and inspiration right to your fingertips.
          </p>
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 mb-6">
              Who We Are?
            </h2>
            <p className="opacity-80 leading-relaxed mb-6">
              BookWebStore is an online platform dedicated to book lovers. Our
              goal is to make reading accessible and convenient by providing a
              wide collection of books across various genres including fiction,
              non-fiction, academic, technology, and self-development.
            </p>
            <p className="opacity-80 leading-relaxed">
              Whether you are a student, professional, or passionate reader, our
              platform helps you find the perfect book easily and quickly.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="Books Collection"
              className="rounded-2xl shadow-xl hover:scale-105 duration-300"
            />
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-pink-400 mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl duration-300">
              <h3 className="text-xl font-semibold mb-3">Wide Collection</h3>
              <p className="opacity-70">
                Explore a diverse range of books across multiple categories.
              </p>
            </div>

            <div className="bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl duration-300">
              <h3 className="text-xl font-semibold mb-3">Easy Ordering</h3>
              <p className="opacity-70">
                Simple add-to-cart system with smooth checkout experience.
              </p>
            </div>

            <div className="bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl duration-300">
              <h3 className="text-xl font-semibold mb-3">Secure Platform</h3>
              <p className="opacity-70">
                Safe and reliable system designed for user satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 mb-6">
            Our Mission
          </h2>
          <p className="max-w-4xl mx-auto opacity-80 leading-relaxed text-lg mb-8">
            Our mission is to promote reading culture by making books easily
            accessible through a modern digital platform. We aim to connect
            readers with stories and knowledge that inspire growth and
            creativity.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 mb-6">
            Our Vision
          </h2>
          <p className="max-w-4xl mx-auto opacity-80 leading-relaxed text-lg">
            We envision becoming a reliable and user-friendly online bookstore
            where readers can explore, purchase, and enjoy books effortlessly
            from anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
