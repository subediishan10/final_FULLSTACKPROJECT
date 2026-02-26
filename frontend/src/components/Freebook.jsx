// import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { useState, useEffect } from "react";
// import Cards from "./Cards";
// import FreebookSkeleton from "../skeleton/FreeBookSkeleton";
// import { useNavigate } from "react-router-dom";
// function Freebook() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//   const [book, setBook] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null); // clicked book

//   // Fetch books
//   useEffect(() => {
//     const getBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/book");
//         // Filter for free science fiction books
//         const filteredData = res.data.filter(
//           (data) => data.category === "Science Fiction",
//         );
//         setBook(filteredData);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getBook();
//   }, []);

//   // Loading skeleton
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <FreebookSkeleton />;

//   // Slick slider settings
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 2 },
//       },
//       { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-15">
//       {/* Header */}
//       <div>
//         <h1 className="font-semibold text-xl pb-2">
//           Free Offered Books for you
//         </h1>
//         <p className="opacity-80">
//           Discover a carefully curated collection of{" "}
//           <span className="text-pink-500">free books</span> across multiple
//           genres, including science fiction, fantasy, romance, and
//           self-development. Dive into exciting stories that entertain and
//           educate, helping you explore new ideas and perspectives. Whether
//           you’re a passionate reader, a student, or just curious to learn,
//           there’s something here for everyone. Start browsing today and uncover
//           hidden gems that inspire, inform, and delight.
//         </p>
//       </div>

//       {/* Slider Section */}
//       {!selectedBook && (
//         <div className="mt-6">
//           <Slider {...settings}>
//             {book.map((item) => (
//               <div
//                 key={item.id}
//                 className="px-2 md:px-3 lg:px-4 cursor-pointer"
//                 onClick={() => navigate(`/bookdetails/${item.id}`)}
//               >
//                 <Cards item={item} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       )}

//       {/* Full-page Scrollable Book Content */}
//       {selectedBook && (
//         <div className="mt-10 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
//           <h1 className="text-3xl font-bold">{selectedBook.title}</h1>
//           <p className="text-gray-600">
//             <strong>Author:</strong> {selectedBook.author}
//           </p>
//           <p className="text-gray-600">
//             <strong>Category:</strong> {selectedBook.category}
//           </p>
//           <p className="text-gray-500 text-sm">
//             <strong>Published:</strong> {selectedBook.published || "2023"}
//           </p>

//           {/* Book image */}
//           {selectedBook.image && (
//             <img
//               src={selectedBook.image}
//               alt={selectedBook.title}
//               className="w-full max-h-96 object-cover rounded-md"
//             />
//           )}

//           {/* Scrollable long content */}
//           <div className="overflow-y-auto max-h-[70vh] text-gray-800 space-y-4 mt-4">
//             <p>
//               {selectedBook.content ||
//                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor..."}
//             </p>
//             <p>
//               {selectedBook.content2 ||
//                 "Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis..."}
//             </p>
//             <p>
//               {selectedBook.content3 ||
//                 "Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis..."}
//             </p>
//           </div>

//           {/* Back Button */}
//           <button
//             className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
//             onClick={() => setSelectedBook(null)}
//           >
//             Back to Books
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Freebook;
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cards from "./Cards";
import FreebookSkeleton from "../skeleton/FreeBookSkeleton";
import { useNavigate } from "react-router-dom";

function Freebook() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
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

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <FreebookSkeleton />;

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-15">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-semibold text-xl pb-2">
          Free Offered Books for you
        </h1>
        <p className="opacity-80">
          Discover a carefully curated collection of{" "}
          <span className="text-pink-500">free books</span> across multiple
          genres, including science fiction, fantasy, romance, and
          self-development. Dive into exciting stories that entertain and
          educate.
        </p>
      </motion.div>

      {/* Slider Section */}
      {!selectedBook && (
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Slider {...settings}>
            {book.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-2 md:px-3 lg:px-4 cursor-pointer"
                onClick={() => navigate(`/bookdetails/${item.id}`)}
              >
                <Cards item={item} />
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      )}

      {/* Full Book View */}
      {selectedBook && (
        <motion.div
          className="mt-10 max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold">{selectedBook.title}</h1>

          <p className="text-gray-600">
            <strong>Author:</strong> {selectedBook.author}
          </p>

          <p className="text-gray-600">
            <strong>Category:</strong> {selectedBook.category}
          </p>

          <p className="text-gray-500 text-sm">
            <strong>Published:</strong> {selectedBook.published || "2023"}
          </p>

          {selectedBook.image && (
            <motion.img
              src={selectedBook.image}
              alt={selectedBook.title}
              className="w-full max-h-96 object-cover rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
          )}

          <div className="overflow-y-auto max-h-[70vh] text-gray-800 space-y-4 mt-4">
            <p>
              {selectedBook.content ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
            </p>
            <p>
              {selectedBook.content2 ||
                "Praesent elementum hendrerit tortor..."}
            </p>
            <p>{selectedBook.content3 || "Nam nec ante. Sed lacinia..."}</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            onClick={() => setSelectedBook(null)}
          >
            Back to Books
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

export default Freebook;
