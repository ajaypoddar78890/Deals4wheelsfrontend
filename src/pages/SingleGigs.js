import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Slider } from "infinite-react-carousel/lib";
import { useParams } from "react-router-dom";
import Review from "../component/Review";
// import { BASE_URL } from "../Utils/BaseUrl";

function Gig() {
  const { id } = useParams();
  console.log(id);

  // // loading the data of single gig

  const { isLoading, error, data } = useQuery({
    queryKey: ["SingleGIG"],
    queryFn: async () => {
      const res = await axios.get(
        `https://deals4wheelss.onrender.com/api/gigs/single/${id}`
      );
      // console.log(res.data._id);
      console.log(res.data);
      return res.data;
    },
  });

  // here we are loadin the user through its id
  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          ` https://deals4wheelss.onrender.com/api/user/${data.userID}`
        );
        console.log(res.data);

        return res.data;
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch  user");
      }
    },
  });

  return (
    <div className="gig flex justify-center">
      {isLoading ? (
        "loading"
      ) : error ? (
        "something Went Wrong"
      ) : (
        <div
          className="containerr  pt-7 pb-0 flex gap-2 "
          style={{ width: 1400 }}
        >
          <div className="left gap-5 flex flex-col" style={{ flex: 2 }}>
            <span className="breadcrumbs font-medium text-2xl  text-gray-900">
              Deals4Wheels Car's hub{" "}
            </span>
            <h1 className="text-3xl font-semi">Product..</h1>
            <span className="text-3xl font-bold text-red-600">
              {data.title}
            </span>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something Went Wrong"
            ) : (
              <div className="user flex items-center gap-2">
                <img
                  className="pp w-8 h-8 object-cover rounded-lg"
                  src={dataUser.img || "/img/noavatar.jpg"}
                  alt=""
                />
                <span className="text-xl font-medium">{dataUser.username}</span>
                <div className="stars flex items-center gap-2">
                  <img className="w-4 h-4" src="/img/star.png" alt="" />
                  <img className="w-4 h-4" src="/img/star.png" alt="" />
                  <img className="w-4 h-4" src="/img/star.png" alt="" />
                  <img className="w-4 h-4" src="/img/star.png" alt="" />
                  <img className="w-4 h-4" src="/img/star.png" alt="" />

                  <span className="text-xl font-bold text-orange-500">5</span>
                </div>
              </div>
            )}

            <Slider slidesToShow={1} className="slider mt-4  w-3/4 ">
              {data.images &&
                data.images.map((img) => (
                  <img
                    className="object-contain "
                    style={{ maxHeight: "500px" }}
                    key={img}
                    src={img}
                    alt=""
                  />
                ))}
            </Slider>

            <hr className="border-b-4" />
            <h2 className="font-medium text-red-600">About This Car</h2>
            <p className="font-bold text-2xl text-gray-700 gap-2">
              {data.desc}
            </p>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something Went Wrong"
            ) : (
              <div className="seller ">
                <h2>About The Seller</h2>
                <div className="user flex items-center gap-2">
                  <img
                    className="w-24 h-24  object-cover rounded-3xl"
                    src={dataUser.img || "/img/noavatar.jpg"}
                    alt=""
                  />
                  <div className="info flex flex-col gap-3">
                    <span className="text-xl font-medium">
                      {dataUser.username}
                    </span>
                    <div className="stars flex items-center  gap-2">
                      <img className="w-4 h-4" src="/img/star.png" alt="" />
                      <img className="w-4 h-4" src="/img/star.png" alt="" />
                      <img className="w-4 h-4" src="/img/star.png" alt="" />
                      <img className="w-4 h-4" src="/img/star.png" alt="" />
                      <img className="w-4 h-4" src="/img/star.png" alt="" />

                      <span className="text-xl font-bold text-orange-500">
                        5
                      </span>
                    </div>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded hover:shadow-xl hover:shadow-blue-500">
                      Contact Me
                    </button>
                  </div>
                </div>
                <div className="box border-4 mt-5 p-5 rounded-lg gap-3">
                  <div className="items flex flex-wrap justify-between  ">
                    <div className="item flex  flex-col w-80 gap-3  mb-5">
                      <span className="title font-bold">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item item flex  flex-col w-80 gap-3  mb-5">
                      <span className="title font-bold">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item item flex  flex-col w-80 gap-3  mb-5">
                      <span className="title font-semibold">
                        Avg. response time
                      </span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item item flex  flex-col w-80 gap-3  mb-5">
                      <span className="title font-bold">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item item flex  flex-col w-80 gap-3  mb-5">
                      <span className="title font-bold">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr className=" border-b-2 border-black " />
                  <p
                    className=" font-medium text-gray-900 gap2 
              "
                  >
                    {dataUser.desc}
                  </p>
                </div>
              </div>
            )}

            <Review id={id} />
          </div>
          <div
            className="right   sticky top-32 border-2 border-gray-600 flex items-center gap-5 rounded-lg p-5 flex-col  h-auto  bg-gray-200"
            style={{ flex: 1 }}
          >
            <div className="price flex items-center justify-between gap-24   ">
              <h2 className="text-red-600">{data.shortTitle}</h2>
              <h4
                className="font-bold text-2xl  text-green-700
            "
              >
                PRICE : ${data.price}
              </h4>
            </div>
            <p className="  pr-72 text-gray-600 text-2xl font-semibold ">
              {data.shortdesc}
            </p>
            <div className="details flex items-center  text-gray-600 mb-1  font-semibold text-2xl gap-24">
              <div className="item flex items-center   gap-3">
                <img className="w-5" src="/img/clock.png" alt="" />
                <span> delevery days {data.deliveryTime}</span>
              </div>
              <div className="item flex items-center gap-3">
                <img className="w-5" src="/img/recycle.png" alt="" />
                <span>Deals</span>
              </div>
            </div>
            <div className="features">
              {data.feature &&
                data.feature.map((feature) => {
                  return (
                    <div
                      className="item flex items-center text-gray-600 gap-3 font-semibold mb-3"
                      key={feature}
                    >
                      <img className="w-6" src="/img/greencheck.png" alt="" />
                      <span className="text-xl  font-bold"> {feature}</span>
                    </div>
                  );
                })}
            </div>

            <button className="bg-slate-800 text-white font-bold rounded-lg p-5 border-none text-lg cursor-pointer">
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
