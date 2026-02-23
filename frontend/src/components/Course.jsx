import { useEffect, useState } from "react";

import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import CourseSkeleton from "../skeleton/CourseSkeleton";

function Course() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <CourseSkeleton />;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl font-semibold md:text-4xl ">
          We're delighted to have you{" "}
          <span className="text-pink-500">here!</span>
        </h1>
        <p className="mt-10 opacity-80">
          Welcome to our curated collection of books, carefully selected to
          inspire learning and spark curiosity. Explore a wide range of titles
          across genres like fiction, self-development, business, and more.
          Whether you are seeking knowledge, entertainment, or personal growth,
          you will find something to captivate your mind. Dive in and discover
          books that educate, entertain, and transform your reading experience.
        </p>

        <Link to="/">
          <button className=" cursor-pointer bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {book.map((item) => {
          return <Cards item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Course;
