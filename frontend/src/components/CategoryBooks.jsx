import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CategoryBooks = () => {
  const { categoryName } = useParams();
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");

        const filteredBooks = res.data.filter(
          (book) =>
            book.category &&
            book.category.toLowerCase() === categoryName.toLowerCase(),
        );

        setBooks(filteredBooks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, [categoryName]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate("/categories")}
        className="mb-6 flex items-center gap-2 px-5 py-2.5 rounded-xl
             border border-base-content/20
             bg-base-100 text-base-content
             hover:bg-pink-500 hover:text-white hover:border-pink-500
             transition-all duration-300 shadow-sm hover:shadow-md
             cursor-pointer"
      >
        <ArrowLeft size={18} />
        Back to Categories
      </button>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-pink-500 mb-8 capitalize">
        {categoryName} Books
      </h1>

      {books.length === 0 ? (
        <p className="text-center text-gray-500 text-sm sm:text-base">
          No books found in this category.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="flex flex-col sm:flex-row gap-4 bg-base-100 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={book.image}
                alt={book.title}
                className="h-40 sm:h-36 w-full sm:w-32 object-cover rounded-lg"
              />

              {/* Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="font-semibold text-lg sm:text-xl">
                    {book.title}
                  </h2>

                  <p className="text-gray-500 text-sm sm:text-base">
                    {book.author}
                  </p>
                </div>

                <p className="text-pink-500 font-bold mt-2 text-base">
                  Rs {book.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryBooks;
