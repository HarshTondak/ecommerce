import React, { useContext } from "react";
import { IoMdClose, IoMdRemove, IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseQty, decreaseQty } = useContext(CartContext);

  return (
    <div
      className="flex gap-x-4 py-2 lg:px-2 border-b 
                border-gray-200 w-full font-light text-gray-500"
    >
      {/* Product Image */}
      <div className="min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img src={image} alt="" className="max-w-[80px]" />
        </Link>
      </div>

      {/* Title & Remove Product Icon */}
      <div className="w-full flex flex-col pt-5">
        <div className="flex justify-between mb-2">
          <Link
            to={`/product/${id}`}
            className="text-sm uppercase font-medium text-primary 
                      max-w-[240px] hover:underline"
          >
            {title}
          </Link>

          <div
            className="text-xl cursor-pointer"
            onClick={() => removeFromCart(id)}
          >
            <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex gap-x-2 text-sm h-[36px]">
          {/* Quantity */}
          <div
            className="flex flex-1 max-w-[100px] items-center h-full 
                        border text-primary font-medium"
          >
            {/* Minus */}
            <div
              onClick={() => decreaseQty(id)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer"
            >
              <IoMdRemove />
            </div>

            {/* Quantity */}
            <div className="h-full flex justify-center items-center px-2">
              {amount}
            </div>

            {/* Plus */}
            <div
              onClick={() => increaseQty(id)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer"
            >
              <IoMdAdd />
            </div>
          </div>

          {/* Product Price */}
          <div className="flex-1 flex justify-around items-center">
            &#8377; {price * 100}
          </div>

          {/* Final Product Price */}
          <div className="flex-1 flex justify-end items-center text-primary font-medium">
            &#8377; {`${parseFloat(price * 100 * amount).toFixed(2)}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
