import React from "react";
import Slide from "infinite-react-carousel";

const CatSlide = ({ slidesToShow, children, arrowsScroll }) => {
  return (
    <div
      className="slider"
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "50px", // Adjust the top padding for distance between other components
        paddingBottom: "50px", // Adjust the bottom padding for distance between other components
        maxWidth: "1000px", // Set a maximum width for the slider to be responsive
        margin: "0 auto", // Center the slider horizontally
      }}
    >
      <div style={{ width: "100%" }}>
        {/* Adjust width of inner div */}
        <Slide
          slidesToShow={slidesToShow}
          arrowsScroll={arrowsScroll}
          style={{ width: "100%" }}
        >
          {children}
        </Slide>
      </div>
    </div>
  );
};

export default CatSlide;
