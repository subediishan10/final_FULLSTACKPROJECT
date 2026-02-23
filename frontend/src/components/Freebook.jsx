import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import Cards from "./Cards";
import FreebookSkeleton from "../skeleton/FreeBookSkeleton";

function Freebook() {
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        const filteredData = res.data.filter(
          (data) => data.category === "Science Fiction",
        );
        setBook(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <FreebookSkeleton />;
  }

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-15 ">
      <div>
        <h1 className="font-semibold text-xl pb-2">
          Free Offered Books for you{" "}
        </h1>
        <p className="opacity-80">
          Discover a carefully curated collection of{" "}
          <span className="text-pink-500">free books</span> across multiple
          genres, including science fiction, fantasy, romance, and
          self-development. Dive into exciting stories that entertain and
          educate, helping you explore new ideas and perspectives. Whether
          you’re a passionate reader, a student, or just curious to learn,
          there’s something here for everyone. Start browsing today and uncover
          hidden gems that inspire, inform, and delight.
        </p>
      </div>

      <div>
        <Slider {...settings} className="mt-6">
          {book.map((item) => (
            <div key={item.id} className="px-2 md:px-3 lg:px-4 ">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
