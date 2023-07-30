import React from "react";
import { Link } from "react-router-dom";

const CatCards = ({ item }) => {
  return (
    <div
      className="cat-card-container"
      style={{
        width: "100%", // Make the card take up the full width of its container
        maxWidth: "252px", // Set a maximum width for the card to be responsive
        height: "344px",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
        position: "relative",
        marginBottom: "20px", // Add some bottom margin to create space between other components
      }}
    >
      <Link>
        <img
          className="card-image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={item.img}
          alt=""
        />
        <span
          className="description"
          style={{
            fontWeight: "300",
            position: "absolute",
            top: "15px",
            left: "15px",
          }}
        >
          {item.desc}
        </span>
        <span
          className="title"
          style={{
            fontWeight: "500",
            fontSize: "24px",
            position: "absolute",
            left: "15px",
            top: "40px",
          }}
        >
          {item.title}
        </span>
      </Link>
    </div>
  );
};

export default CatCards;
