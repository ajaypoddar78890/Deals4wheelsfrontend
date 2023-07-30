import React from "react";
import axios from "axios";
import Review from "./Review";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../Utils/BaseUrl";

const Reviews = ({ id }) => {
  console.log(id);
  const { isLoading, error, data } = useQuery(["SingleGIG", id], async () => {
    try {
      const res = await axios.get(
        `https://deals4wheelss.onrender.com/api/review/${id}`
      );
      console.log("API response:", res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch reviews.");
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong: {error.message}</div>;
  }

  return (
    <div>
      <div className="reviews">
        <h2>Reviews</h2>
        {data.length === 0 ? (
          <div>No reviews available</div>
        ) : (
          data.map((review) => <Review key={review._id} review={review} />)
        )}
      </div>
    </div>
  );
};

export default Reviews;
