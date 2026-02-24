import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function BookDetails() {
  const { id } = useParams(); // get :id from the URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/book/${id}`); // Backend should support GET /book/:id
        console.log(res.data);
        setBook(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!book) return <p className="text-center mt-10">Book not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <p className="text-gray-600 mb-1">
        <strong>Author:</strong> {book.author}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Category:</strong> {book.category}
      </p>
      <p className="text-gray-500 mb-4">
        <strong>Published:</strong> {book.published || "2023"}
      </p>

      {book.image && (
        <img
          src={book.image}
          alt={book.title}
          className="w-full max-h-96 object-cover rounded-md mb-6"
        />
      )}

      <div className="space-y-4 text-gray-800 overflow-y-auto max-h-[70vh]">
        <p>
          {book.content ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
        </p>
        <p>
          {book.content2 ||
            "Praesent elementum hendrerit tortor. Sed semper lorem at felis..."}
        </p>
        <p>
          {book.content3 ||
            "Nam nec ante. Sed lacinia, urna non tincidunt mattis..."}
        </p>
      </div>
    </div>
  );
}

export default BookDetails;
