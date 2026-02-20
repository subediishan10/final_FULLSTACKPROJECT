import React from "react";
import axios from "axios";
function Cards({ item }) {
  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:4001/cart", {
        id: item.id,
        title: item.title,
        author: item.author,
        category: item.category,
        price: item.price,
        image: item.image,
        quantity: 1,
      });

      alert("Book added to cart!");
    } catch (error) {
      console.log(error);
      alert("Error adding to cart ");
    }
  };

  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div
          className={`card bg-base-100 w-92 shadow-sm w-full h-auto hover:scale-105 duration-200 border rounded-lg border-base-content/20`}
        >
          <figure>
            <img
              src={item.image}
              alt="Shoes"
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.author}</p>
            <p>{item.category}</p>
            <div className="card-actions flex  justify-between items-center ">
              <div className="badge badge-outline">${item.price}</div>
              <div
                onClick={handleAddToCart}
                className="cursor-pointer px-2 py-1 border rounded-full hover:bg-pink-500 hover:text-white duration-200 "
              >
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
