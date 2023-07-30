import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Import the hamburger menu icon
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  //logout handle button

  const handleLogout = async () => {
    try {
      await axios.post("https://deals4wheelss.onrender.com/api/auth/logout");

      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:sticky lg:navbar flex justify-center bg-red-900 top-0 z-10 custom:flex custom:justify-center custom:text-sm sm:flex sm:justify-center md:flex  md:justify-center        md:text-base">
      <div className="container grid grid-cols-2 py-5 px-0 text-black sm:gap-2 sm:text-sm sm:font-medium lg:gap-8 lg:font-bold lg:text-xl ">
        <div className="logo col-span-2 lg:col-span-1 sm:col-span-4">
          <Link to="/">
            <h1 className="text-white custom:text-2xl  md:pl-9 md:text-3xl  hover:text-white">
              Deals4Wheels
            </h1>
          </Link>
        </div>

        <div className="lg:hidden ml-auto w-full flex items-center justify-end custom:justify-start">
          <button
            className="text-white custom:float-right custom:ml-72 custom:pb-8  sm:hidden lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Open Mobile Menu"
          >
            <FiMenu size={30} />
          </button>
        </div>

        {/* Desktop Navigation Menu */}
        <div className="links hidden lg:flex items-center gap-8 md:flex md:items-center   ">
          <Link class="hover:text-white" to="/exclusive">
            EXCLUSIVE
          </Link>
          <Link class="hover:text-white" to="/cars">
            CARS
          </Link>
          <Link class="hover:text-white" to="/help">
            HELP
          </Link>
          <Link class="hover:text-white" to="/messages">
            MESSAGES
          </Link>
          <Link class="hover:text-white" to="/order">
            ORDERS
          </Link>
          {!currentUser && (
            <Link to="/login">
              <button className="border-1 rounded-md shadow-lg hover:border-black hover:border-2">
                LOG IN
              </button>
            </Link>
          )}
          {currentUser && (
            <div
              className="user relative flex items-center gap-3 cursor-pointer"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img
                className="w-8 h-8 object-cover rounded-md"
                src={currentUser.img || "/img/noavatar.jpg"}
                alt=""
              />
              <span>{currentUser?.username}</span>
            </div>
          )}
        </div>
        {/* Mobile Navigation Menu */}
        {open && (
          <div className="lg:hidden absolute flex flex-col gap-2 top-16 bg-white text-black right-0 p-5 rounded-lg h-45 w-45 z-10">
            <Link to="/exclusive">EXCLUSIVE</Link>
            <Link to="/cars">CARS</Link>
            <Link to="/help">HELP</Link>
            <Link to="/messages">MESSAGES</Link>
            <Link to="/order">ORDERS</Link>
            {!currentUser && (
              <Link to="/login">
                <button className="border-1 rounded-md shadow-lg hover:border-black hover:border-2">
                  LOG IN
                </button>
              </Link>
            )}
            {currentUser && (
              <div className="user relative flex items-center gap-3 cursor-pointer">
                <img
                  className="w-8 h-8 object-cover rounded-md"
                  src={currentUser.img || "/img/noavatar.jpg"}
                  alt=""
                />
                <span>{currentUser?.username}</span>
                {currentUser?.IsSeller && (
                  <>
                    <Link to="/Gigs">GiG</Link>
                    <Link to="/add">AddGiG</Link>
                  </>
                )}
                <Link to="/register">REGISTER</Link>
                <Link onClick={handleLogout}>LOGOUT</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
