import React from "react";
import { Link } from "react-router-dom";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="myGigs flex justify-center bg-gray-200">
      <div className="containerr w-4/5 pt-12 pb-7">
        <div className="title flex justify-between">
          <h1>{currentUser.isSeller ? "myGigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button className=" bg-blue-950 text-white text-lg font-bold p-2  rounded-lg cursor-pointer">
                Add New Gig
              </button>
            </Link>
          )}
        </div>

        <table className="w-full  mb-4 m-8 ">
          <tr className="">
            <th class=" py-5 font-serif  text-left font-semibold text-lg uppercase">
              Image
            </th>
            <th class="px-6 py-3   font-serif text-left font-semibold text-lg uppercase">
              Title
            </th>
            <th class="  py-3 text-left font-serif font-semibold text-lg uppercase">
              Price
            </th>
            <th class=" py-3 text-left font-serif font-semibold text-lg uppercase">
              Sales
            </th>
            <th class=" py-3 text-left font-serif font-semibold text-lg uppercase">
              Action
            </th>
          </tr>
          <tr className="border-b border-gray-500 pr-3 h-12">
            <td className="">
              <img
                className="image image w-16 h-9 object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td className="font-semibold text-lg">Ai generated concept art</td>
            <td className="font-semibold text-lg">
              120.<sup>99</sup>
            </td>
            <td className="font-semibold text-lg">41</td>
            <td>
              <img
                className="delete delete w-8 cursor-pointer"
                src="./img/delete.png"
                alt=""
              />
            </td>
          </tr>

          <tr className="h-12 border-b border-gray-500 pr-3 ">
            <td>
              <img
                className="image image w-16 h-9 object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td className="font-semibold text-lg">Ai generated concept art</td>
            <td className="font-semibold text-lg">
              120.<sup>99</sup>
            </td>
            <td className="font-semibold text-lg">41</td>
            <td>
              <img
                className="delete delete w-8 cursor-pointer"
                src="./img/delete.png"
                alt=""
              />
            </td>
          </tr>
          <tr className="border-b border-gray-500 pr-3 h-12 ">
            <td>
              <img
                className="image image w-16 h-9 object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td className="font-semibold text-lg">
              High quality digital character
            </td>
            <td className="font-semibold text-lg">
              79.<sup>99</sup>
            </td>
            <td className="font-semibold text-lg">55</td>
            <td>
              <img
                className="delete delete w-8 cursor-pointer"
                src="./img/delete.png"
                alt=""
              />
            </td>
          </tr>
          <tr className="border-b border-gray-500 pr-3 h-12">
            <td>
              <img
                className="image image w-16 h-9 object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td className="font-semibold text-lg">
              Illustration hyper realistic painting
            </td>
            <td className="font-semibold text-lg">
              119.<sup>99</sup>
            </td>
            <td className="font-semibold text-lg">29</td>
            <td>
              <img
                className="delete delete w-8 cursor-pointer"
                src="./img/delete.png"
                alt=""
              />
            </td>
          </tr>
          <tr className="border-b border-gray-500 pr-3 h-12">
            <td>
              <img
                className="image image w-16 h-9 object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td className="font-semibold text-lg">
              Original ai generated digital art
            </td>
            <td className="font-semibold text-lg">
              59.<sup>99</sup>
            </td>
            <td className="font-semibold text-lg">34</td>
            <td>
              <img
                className="delete delete w-8 cursor-pointer"
                src="./img/delete.png"
                alt=""
              />
            </td>
          </tr>
          <tr className="border-b border-gray-500 pr-3 h-12">
            <td>
              <img
                className="image  w-16 h-9 object-cover"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td className="font-semibold text-lg">
              Text based ai generated art
            </td>
            <td className="font-semibold text-lg">
              110.<sup>99</sup>
            </td>
            <td className="font-semibold text-lg">16</td>
            <td>
              <img
                className="delete delete w-8 cursor-pointer"
                src="./img/delete.png"
                alt=""
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;
