import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CategoriesLoading from "../skeleton/CategorySkeleton";
import { useNavigate } from "react-router-dom";
import {
  Baby,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  GraduationCap,
  HatGlasses,
  Heart,
  School,
  Search,
} from "lucide-react";

function Category() {
  const [size] = useState(30);
  const [loading, setLoading] = useState(true);
  const colorIcon = "text-pink-500";
  const navigate = useNavigate();

  const categories = [
    { name: "Fiction", icon: <BookOpen size={size} className={colorIcon} /> },
    {
      name: "Business",
      icon: <BriefcaseBusiness size={size} className={colorIcon} />,
    },
    {
      name: "Self Development",
      icon: <GraduationCap size={size} className={colorIcon} />,
    },
    { name: "Fantasy", icon: <School size={size} className={colorIcon} /> },
    { name: "Mystery", icon: <HatGlasses size={size} className={colorIcon} /> },
    { name: "Educational", icon: <Search size={size} className={colorIcon} /> },
    { name: "Romance", icon: <Heart size={size} className={colorIcon} /> },
    { name: "Biography", icon: <Calendar size={size} className={colorIcon} /> },
    { name: "Children", icon: <Baby size={size} className={colorIcon} /> },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-25">
      {loading ? (
        <CategoriesLoading count={categories.length} />
      ) : (
        <>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-pink-500 mb-2">
              Browse Books by Category
            </h1>
            <p className="text-gray-500">
              Explore books from your favorite genres
            </p>
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-13 gap-6"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.97 }}
                className="shadow-md rounded-lg p-6 flex flex-col items-center justify-center border border-base-content/15 cursor-pointer bg-base-100"
                onClick={() =>
                  navigate(`/categories/${category.name.toLowerCase()}`)
                }
              >
                <div className="mb-3">{category.icon}</div>
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}

export default Category;
