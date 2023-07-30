import React from "react";
import bannerhero from "./bannerhero.mp4";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="w-full relative  overflow-hidden ">
      <video
        className="w-full h-full object-cover  "
        src={bannerhero}
        autoPlay
        loop
        muted
      />

      <div className="absolute top-4 w-full flex flex-col text-center text-white p-4 md:p-10 lg:p-20">
        <h1 className="text-white px-2 py-8 text-4xl sm:text-xl lg:text-6xl max-w-xl mx-auto leading-tight font-bold">
          All types of Cars available
        </h1>
        <h1 className="py-2 text-white text-2xl sm:text-3xl max-w-lg mx-auto">
          Delivery Worldwide
        </h1>

        <form className="flex flex-wrap justify-center items-center max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-full mx-auto border p-2 rounded-md text-black bg-gray-100/90 mt-10">
          <div className="p-2 w-full sm:w-auto">
            <input
              className="bg-transparent w-full focus:outline-none"
              type="text"
              placeholder="Find Your Cars"
            />
          </div>
          <div className="p-2">
            <button
              type="submit"
              className="inline-flex items-center bg-transparent hover:bg-yellow-500 hover:text-white border border-gray-400 rounded-md font-semibold text-sm transition-colors duration-300 px-3 py-2 focus:outline-none"
            >
              <BiSearch size={20} className="icon" style={{ color: "" }} />
              <span className="ml-1 hidden sm:inline-block">Search</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
