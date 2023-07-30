import React from "react";

const Review = () => {
  // console.log(review);
  return (
    <>
      <div
        className="item flex flex-col  gap-5  mt-5 mb-0
"
      >
        <div className="user flex items-center gap-2 ">
          <img
            className="pp h-12 w-12 object-cover rounded-lg"
            src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="info">
            <span>Garner David</span>
            <div className="country flex items-center gap-3 text-gray-700">
              <img
                className="w-5"
                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                alt=""
              />
              <span>United States</span>
            </div>
          </div>
        </div>
        <div className="stars flex gap-3">
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <span className="font-bold text-orange-600 text-xl">5</span>
        </div>
        {/* <p className=" font-semibold text-gray-700  text-xl">{review.desc}</p> */}

        <p className="font-semibold text-gray-700 text-xl">this is nice app</p>

        <div className="helpful flex items-center  gap-3">
          <span>Helpful?</span>
          <img className="w-4" src="/img/like.png" alt="" />
          <span>Yes</span>
          <img className="w-4" src="/img/dislike.png" alt="" />
          <span>No</span>
        </div>
        <div className="user flex items-center gap-2 ">
          <img
            className="pp h-12 w-12 object-cover rounded-lg"
            src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="info">
            <span>Garner David</span>
            <div className="country flex items-center gap-3 text-gray-700">
              <img
                className="w-5"
                src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                alt=""
              />
              <span>United States</span>
            </div>
          </div>
        </div>
        <div className="stars flex gap-3">
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <img src="/img/star.png" alt="" />
          <span className="font-bold text-orange-600 text-xl">5</span>
        </div>
        {/* <p className=" font-semibold text-gray-700  text-xl">{review.desc}</p> */}

        <p className="font-semibold text-gray-700 text-xl">this is nice app</p>

        <div className="helpful flex items-center  gap-3">
          <span>Helpful?</span>
          <img className="w-4" src="/img/like.png" alt="" />
          <span>Yes</span>
          <img className="w-4" src="/img/dislike.png" alt="" />
          <span>No</span>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Review;
