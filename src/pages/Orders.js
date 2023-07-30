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
          {currentUser.isSeller && <Link to="/add"></Link>}
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
              {currentUser?.isSeller ? "Buyer" : "Seller"}
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
            <td className="font-semibold text-lg">
              new G63 amg with brabus kit
            </td>
            <td className="font-semibold text-lg">$400,000.</td>
            <td className="font-semibold text-lg">1</td>
            <td>
              <img
                className="message  w-8 cursor-pointer"
                src="./img/message.png"
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
            <td className="font-semibold text-lg">
              {" "}
              Lamborghini Huracan STO 2023{" "}
            </td>
            <td className="font-semibold text-lg">$300,000</td>
            <td className="font-semibold text-lg">1</td>
            <td>
              <img
                className="message  w-8 cursor-pointer"
                src="./img/message.png"
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
            <td className="font-semibold text-lg">PORCHE 911 Turbo red</td>
            <td className="font-semibold text-lg">$430,000</td>
            <td className="font-semibold text-lg">5</td>
            <td>
              <img
                className="message  w-8 cursor-pointer"
                src="./img/message.png"
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
            <td className="font-semibold text-lg">Buggati Chiron Pur Sports</td>
            <td className="font-semibold text-lg">$5.6M</td>
            <td className="font-semibold text-lg">1</td>
            <td>
              <img
                className="message  w-8 cursor-pointer"
                src="./img/message.png"
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
            <td className="font-semibold text-lg">Koinegsegg Agera R fasted</td>
            <td className="font-semibold text-lg">$4.5M</td>
            <td className="font-semibold text-lg">1</td>
            <td>
              <img
                className="message  w-8 cursor-pointer"
                src="./img/message.png"
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
            <td className="font-semibold text-lg">Rolls Royce Cullinun 2020</td>
            <td className="font-semibold text-lg">$1.2M</td>
            <td className="font-semibold text-lg">3</td>
            <td>
              <img
                className="message  w-8 cursor-pointer"
                src="./img/message.png"
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
