import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";

const GigCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["gigUser"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          `https://deals4wheelss.onrender.com/api/user/${item.userID}`,
          { withCredentials: true }
        );
        return res.data;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch gigs");
      }
    },
  });
  return (
    <Link to={`/cars/${item._id}`} className="block w-full">
      <div className="flex flex-col rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-500 ease-in-out">
        <img className="h-48 object-cover" src={item.cover} alt="" />
        <div className="p-5 flex flex-col justify-between h-full">
          {isLoading ? (
            "loading"
          ) : error ? (
            "something went wrong"
          ) : (
            <div className="flex items-center mb-2">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src={data.img || "/img/noavatar.jpg"}
                alt=""
              />
              <span className="text-gray-700 font-medium text-sm">
                {data.username}
              </span>
            </div>
          )}
          <h3 className="text-gray-900 font-semibold text-lg truncate">
            {item.title}
          </h3>
          <p className="text-gray-700 text-base mt-2 flex-1">{item.desc}</p>
          <hr className="my-4 border-t border-gray-300" />
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AiOutlineHeart className="text-red-400 mr-2" />
              <span className="text-gray-600 font-medium text-sm">
                {item.likes}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-gray-500 font-medium text-sm">
                Starting at
              </span>
              <span className="text-gray-900 font-semibold text-lg">
                {item.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
