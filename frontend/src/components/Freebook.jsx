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
          (data) => data.category === "Free",
        );
        setBook(filteredData);
        setLoading(false);
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

  return loading ? (
    <FreebookSkeleton />
  ) : (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-15 ">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses </h1>
        <p>
          {" "}
          Emmet Abbreviation Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vel quo aliquid autem magni, eligendi placeat ex dolorum soluta
          mollitia impedit architecto voluptas provident molestiae earum maiores
          illum eius delectus sapiente.
        </p>
      </div>

      <div>
        <Slider {...settings} className="mt-6">
          {book.map((item) => (
            <div key={item.id} className="px-2 md:px-3 lg:px-4">
              <Cards item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
