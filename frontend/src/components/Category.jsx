import React, { useState, useEffect } from "react";
import CategoriesLoading from "../skeleton/CategorySkeleton"; // import skeleton
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

function Categories() {
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

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-25">
      {loading ? (
        <CategoriesLoading count={categories.length} />
      ) : (
        <>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-pink-500 mb-2">
              Browse Books by Category
            </h1>
            <p className="text-gray-500">
              Explore books from your favorite genres
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-13 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transform transition duration-300 border border-base-content/15 cursor-pointer"
                onClick={() =>
                  navigate(`/categories/${category.name.toLowerCase()}`)
                }
              >
                <div className="mb-3">{category.icon}</div>
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Categories;
