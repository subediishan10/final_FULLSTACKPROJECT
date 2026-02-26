import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutSkeleton from "../skeleton/AboutSkeleton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-base-content px-6 md:px-20 py-16 mt-10">
      {loading ? (
        <AboutSkeleton />
      ) : (
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6">
              About Our Online Book Store
            </h1>
            <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
              Welcome to BookWebStore — your trusted destination for
              discovering, exploring, and purchasing books online. We bring
              stories, knowledge, and inspiration right to your fingertips.
            </p>
          </motion.div>

          {/* Who We Are */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 mb-6">
                Who We Are?
              </h2>
              <p className="opacity-80 leading-relaxed mb-6">
                BookWebStore is an online platform dedicated to book lovers...
              </p>
              <p className="opacity-80 leading-relaxed">
                Whether you are a student, professional, or passionate reader...
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                alt="Books Collection"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* What We Offer */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-pink-400 mb-12">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {["Wide Collection", "Easy Ordering", "Secure Platform"].map(
                (title, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-base-100 p-6 rounded-2xl shadow-md hover:shadow-xl duration-300"
                  >
                    <h3 className="text-xl font-semibold mb-3">{title}</h3>
                    <p className="opacity-70">
                      {title === "Wide Collection" &&
                        "Explore a diverse range of books across multiple categories."}
                      {title === "Easy Ordering" &&
                        "Simple add-to-cart system with smooth checkout experience."}
                      {title === "Secure Platform" &&
                        "Safe and reliable system designed for user satisfaction."}
                    </p>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 mb-10">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto text-left">
              {[
                "📚 Passion for Reading",
                "🤝 Customer First Approach",
                "🔒 Trust & Transparency",
                "🚀 Continuous Innovation",
                "🌍 Community Growth",
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold mb-3">{value}</h3>
                  <p className="opacity-80 leading-relaxed">
                    We are committed to excellence and continuous improvement in
                    everything we do, ensuring value and growth for our readers
                    and community.
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 mb-5">
              Our Mission
            </h2>
            <p className="max-w-4xl mx-auto opacity-80 leading-relaxed text-lg mb-20">
              Our mission is to promote reading culture by making books easily
              accessible through a modern digital platform.
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 mb-5">
              Our Vision
            </h2>
            <p className="max-w-4xl mx-auto opacity-80 leading-relaxed text-lg">
              We envision becoming a reliable and user-friendly online
              bookstore.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default About;
