import React from "react";

function Messages() {
  return (
    <div class="myGigs flex justify-center bg-gray-200">
      <div class="containerr w-full sm:w-4/5 pt-12 pb-7">
        <div class="title flex justify-between">
          <h1> messages</h1>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full mb-4">
            <thead>
              <tr class="bg-gray-200 uppercase text-sm font-semibold tracking-wide">
                <th class="py-3 px-4 text-left font-bold text-xl">Buyer</th>
                <th class="py-3 px-4 text-left font-bold text-xl">
                  Last Message
                </th>
                <th class="py-3 px-4 text-left font-bold text-xl">Date</th>
                <th class="py-3 px-4 text-left font-bold text-xl">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr class="hover:bg-gray-100">
                <td class="py-3 px-4 whitespace-no-wrap text-lg font-semibold">
                  Ajay Poddar
                </td>
                <td class="py-3 px-4 whitespace-pre-line font-medium text-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  posuere nisi ullamcorper quam consequat placerat.
                </td>
                <td class="py-3 px-4 whitespace-no-wrap font-semibold text-lg">
                  3 hours ago
                </td>
                <td class="py-3 px-4">
                  <a href="/message/123">
                    <button class="bg-green-400 hover:bg-green-900 hover:text-white text-gray-800 font-bold py-2 px-4 rounded cursor-pointer">
                      Mark as Read
                    </button>
                  </a>
                </td>
              </tr>
              <tr class="hover:bg-gray-100">
                <td class="py-3 px-4 whitespace-no-wrap text-lg font-semibold">
                  YASHRAJ
                </td>
                <td class="py-3 px-4 whitespace-pre-line font-medium text-md">
                  consectetur adipiscing elit. Sed posuere nisi ullamcorper quam
                  consequat placerat.
                </td>
                <td class="py-3 px-4 whitespace-no-wrap font-semibold text-lg">
                  1 days ago
                </td>
                <td class="py-3 px-4">
                  <a href="/message/123">
                    <button class="bg-green-400 hover:bg-green-900 hover:text-white text-gray-800 font-bold py-2 px-4 rounded cursor-pointer">
                      Mark as Read
                    </button>
                  </a>
                </td>
              </tr>
              <tr class="hover:bg-gray-100">
                <td class="py-3 px-4 whitespace-no-wrap text-lg font-semibold">
                  DC suneja
                </td>
                <td class="py-3 px-4 whitespace-pre-line font-medium text-md">
                  eius ipsam! Quas, consequatur sequi. Aspernatur iste dicta,
                  necessitatibus reiciendis atque eaque quis sequi nobis
                  deleniti sit dolorum doloribus praesentium laudantium eligendi
                  quia unde.
                </td>
                <td class="py-3 px-4 whitespace-no-wrap font-semibold text-lg">
                  2 days ago
                </td>
                <td class="py-3 px-4">
                  <a href="/message/123">
                    <button class="bg-green-400 hover:bg-green-900 hover:text-white text-gray-800 font-bold py-2 px-4 rounded cursor-pointer">
                      Mark as Read
                    </button>
                  </a>
                </td>
              </tr>
              <tr class="hover:bg-gray-100">
                <td class="py-3 px-4 whitespace-no-wrap text-lg font-semibold">
                  KUNAL seohar
                </td>
                <td class="py-3 px-4 whitespace-pre-line font-medium text-md">
                  Lo orro excepturi repellendus perferendis magni ab, libero
                  molestias nemo. Dicta nulla dolorem adipisci..
                </td>
                <td class="py-3 px-4 whitespace-no-wrap font-semibold text-lg">
                  3 days ago
                </td>
                <td class="py-3 px-4">
                  <a href="/message/123">
                    <button class="bg-green-400 hover:bg-green-900 hover:text-white text-gray-800 font-bold py-2 px-4 rounded cursor-pointer">
                      Mark as Read
                    </button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Messages;
