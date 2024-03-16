import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // Fetching the product based on its ID
  const product = products.find((prod) => {
    return prod.id === parseInt(id);
  });

  // To show the loading
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading....
      </section>
    );
  }

  // Destructuring the product
  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* IProduct Info */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>

          <div className="flex-1 text-center lg:text-left">
            {/* Title */}
            <h1 className="text-[26px] font-medium mb-2 max-w-[400px] mx-auto">
              {title}
            </h1>

            {/* Price */}
            <div className="text-xl text-red-500 font-medium mb-6">
              &#8377; {price * 100}
            </div>

            {/* Description */}
            <p className="mb-8">{description}</p>

            {/* Add to cart button */}
            <button
              onClick={() => addToCart(product)}
              className="bg-primary py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
