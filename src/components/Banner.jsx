import React from "react";
import bannerImage from "../assets/sliderImages/b1.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-[470px]">
      {/* Banner Image */}
      <img
        src={bannerImage}
        alt="Banner"
        className="w-full h-full object-cover blur-[0px]"
      />
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <h1 className="text-white text-5xl font-extrabold tracking-wide text-center">
          Together, We Can Make a Difference
        </h1>
      </div>
    </div>
  );
};

export default Banner;
