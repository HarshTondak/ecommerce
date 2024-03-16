import React from "react";
import { Link } from "react-router-dom";
import MainImg from "../img/main.png";

const Hero = () => {
  return (
    <section className="h-[700px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full text-white">
        {/* TEXT */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center font-bold uppercase">
            <div className="w-10 h-[5px] bg-gray-700 mr-3"></div>
            New Trend
          </div>

          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            SUMMER SALE STYLISH <br />
            <span className="font-semibold">MENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-white"
          >
            Discover Here
          </Link>
        </div>

        {/* IMAGE */}
        <div className="hidden lg:block">
          <img src={MainImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
