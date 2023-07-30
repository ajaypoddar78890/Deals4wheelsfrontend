import React from "react";
import axios from "axios";
import { useRef } from "react";
import GigCard from "../component/GigCard";
import { useQuery } from "@tanstack/react-query";
// import { BASE_URL } from "../Utils/BaseUrl";

const Cars = () => {
  const minRef = useRef();
  const maxRef = useRef();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: async () => {
      try {
        // const res = await axios.get("http://localhost:5500/api/gigs");
        const res = await axios.get(
          "https://deals4wheelss.onrender.com/api/gigs",
          { withCredentials: true }
        );
        return res.data;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch gigs");
      }
    },
  });

  console.log(data);

  const apply = () => {
    refetch();
  };

  return (
    <div className="flex justify-center bg-gray-300">
      <div className="container mx-auto px-8 py-12 ">
        <h1 className="text-4xl font-bold text-center text-gray-700 mb-2">
          Deals4Wheels PreOwned Dealarship
        </h1>
        <p className="text-xl font-medium text-center text-gray-500 mb-6">
          Classic, fastest - explore the boundaries of cars at your doorstep
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center pl-96">
            <label
              htmlFor="minPrice"
              className="font-bold text-lg text-gray-600 mr-3"
            >
              Budget:
            </label>
            <input
              id="minPrice"
              ref={minRef}
              className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              type="number"
              placeholder="Minimum Price"
            />
            <input
              ref={maxRef}
              id="maxPrice"
              className="border border-gray-400 rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
              type="number"
              placeholder="Maximum Price"
            />
            <button
              onClick={apply}
              className="bg-blue-500 rounded-lg ml-3 hover:bg-blue-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
            >
              Apply
            </button>
          </div>
        </div>
        {/* //gigs card */}
        <div className="flex flex-wrap -mx-4 py-5 ">
          {isLoading
            ? "LOADING"
            : error
            ? "something went wrong"
            : data.map((gig) => (
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-4">
                  <GigCard key={gig._id} item={gig} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
