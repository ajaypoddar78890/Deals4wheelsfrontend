import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, Setusername] = useState("");
  const [password, Setpassword] = useState("");
  //   const [error, Seterror] = useState();
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://deals4wheelss.onrender.com/api/auth/login",
        {
          username,
          password,
          // token,
        },
        { withCredentials: true }
      );
      localStorage.setItem("currentUser", JSON.stringify(res.data));

      Navigate("/");
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      class="min-h-screen bg-cover bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url('https://images.wallpaperscraft.com/image/single/bmw_headlights_lights_137326_3840x2400.jpg')`,
      }}
    >
      <div class="w-full max-w-md">
        <div class="bg-white shadow-md rounded px-8 py-8">
          <div class="font-medium mb-6 text-lg text-gray-700">
            Log in to your account
          </div>
          <form>
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="username">
                Username
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight   focus:shadow-outline hover:outline-1  hover:border-2 hover:border-green-500"
                id="username"
                type="text"
                onChange={(e) => Setusername(e.target.value)}
              />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 font-bold mb-2" for="password">
                Password
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:outline-1  hover:border-2 hover:border-green-500"
                id="password"
                type="password"
                onChange={(e) => Setpassword(e.target.value)}
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Log In
              </button>

              {/* <Link
                 
                
              
              >
                Forgot Password?
              <Link/> */}

              <Link>
                <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                  Forgot Password?
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
