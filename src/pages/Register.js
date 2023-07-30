import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import upload from "../Utils/Upload";

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  console.log(user);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      // await axios.post("http://localhost:5500/api/auth/register", {
      await axios.post(`https://deals4wheelss.onrender.com/api/auth/register`, {
        ...user,
        img: url,
      });
      console.log(user);
      console.log(url);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      class="bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url('https://images.wallpaperscraft.com/image/single/bmw_headlights_lights_137326_3840x2400.jpg')`,
      }}
    >
      <div class="max-w-lg mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h1 class="text-3xl font-bold mb-8 text-white">
              Create a new account
            </h1>
            <form class="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  class="block  font-medium mb-2 text-white"
                  for="username"
                >
                  Username
                </label>
                <input
                  class="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 pl-2 font-semibold"
                  id="username"
                  name="username"
                  type="text"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  class="block    mb-2 font-semibold text-white"
                  for="email "
                >
                  Email
                </label>
                <input
                  class="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 pl-2 font-semibold"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  class="block  mb-2 text-white font-semibold"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 pl-2 font-semibold"
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  class="block  mb-2 text-white font-semibold"
                  for="profile-picture"
                >
                  Profile Picture
                </label>
                <input
                  class="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 pl-2 font-bold text-white"
                  id="profile-picture "
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div>
                <label
                  class="block   mb-2 text-white font-semibold"
                  for="country"
                >
                  Country
                </label>
                <input
                  class="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 pl-2 font-semibold"
                  id="country"
                  name="country"
                  type="text"
                  placeholder="USA"
                  onChange={handleChange}
                />
              </div>
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>

          <div>
            <h1 class="text-3xl f mb-8 text-white font-semibold">
              I want to become a seller
            </h1>
            <form onSubmit={handleSubmit}>
              <div class="flex items-center gap-4 mb-6">
                <label
                  class="block text-white font-semibold "
                  for="seller-account"
                >
                  Activate the seller account
                </label>
                <input
                  type="checkbox"
                  class="h-6 w-6 rounded-full border-gray-300 focus:ring-blue-500"
                  onChange={handleSeller}
                />
              </div>
              <div>
                <label class="block text-white font-semibold mb-2" for="phone">
                  Phone Number
                </label>
                <input
                  class="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 placeholder-gray-400"
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="+1 234 567 89"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  class="block text-white font-semibold mb-2"
                  for="description"
                >
                  Description
                </label>
                <textarea
                  class="block w-full border-gray-300 rounded-md focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                  id="description"
                  name="desc"
                  placeholder="A short description of yourself"
                  cols="30"
                  rows="10"
                  onChange={handleChange}
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
