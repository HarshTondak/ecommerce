import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);

  // Function to truncate the title to 50 characters
  const truncatedTitle = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };

  return (
    <div>
      {/* Product Image */}
      <div
        className="border border-[#e4e4e4] h-[300px]
                    mb-4 relative overflow-hidden group transition"
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt=""
              className="max-h-[160px] group-hover:scale-110 transition duration-500"
            />
            <div
              className="absolute top-3 -right-11 group-hover:right-3 p-2 
                          flex flex-col items-center justify-center opacity-0 
                          group-hover:opacity-100 transition-all duration-500"
            >
              <button
                className="flex justify-center items-center bg-red-500 
                          text-white w-12 h-12"
                onClick={() => addToCart(product)}
              >
                <BsPlus className="text-3xl" />
              </button>
              <Link
                to={`/product/${id}`}
                className="w-12 h-12 bg-white flex justify-center 
                            items-center text-primary drop-shadow-xl"
              >
                <BsEyeFill />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{truncatedTitle(title, 40)}</h2>
        </Link>
        <div className="font-semibold">&#8377; {price * 100}</div>
      </div>
    </div>
  );
};

export default Product;
