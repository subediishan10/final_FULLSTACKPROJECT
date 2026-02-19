import React from "react";
function Cards({ item }) {
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
              <div className="cursor-pointer px-2 py-1 border rounded-full hover:bg-pink-500 hover:text-white duration-200 ">
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
