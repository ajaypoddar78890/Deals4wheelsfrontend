import React from "react";

const Add = () => {
  return (
    <div class="add bg-gray-300 py-12">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-8">Add New Car Gig</h1>
        <div class="flex flex-wrap -mx-4">
          <div class="w-full lg:w-1/2 px-4 mb-6">
            <div class="bg-white rounded shadow p-4">
              <label class="block font-semibold mb-2" for="title">
                Title
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="e.g. I will do something I'm really good at"
              />
              <label class="block font-semibold mt-4 mb-2" for="category">
                Category
              </label>
              <select
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="cats"
                id="cats"
              >
                <option value="design">Design</option>
                <option value="web">Web Development</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
              <label class="block font-semibold mt-4 mb-2" for="cover">
                Cover Image
              </label>
              <input type="file" id="cover" />
              <label class="block font-semibold mt-4 mb-2" for="images">
                Upload Images
              </label>
              <input type="file" id="images" multiple />
              <label class="block font-semibold mt-4 mb-2" for="description">
                Description
              </label>
              <textarea
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="description"
                id="description"
                placeholder="Brief descriptions to introduce your service to customers"
                rows="6"
              ></textarea>
              <button class="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Create
              </button>
            </div>
          </div>
          <div class="w-full lg:w-1/2 px-4 mb-6">
            <div class="bg-white rounded shadow p-4">
              <label
                class="block font-semibold mt-4 mb-2"
                for="short-description"
              >
                Short Description
              </label>
              <textarea
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="short-description"
                id="short-description"
                placeholder="Short description of your service"
                rows="4"
              ></textarea>
              <label class="block font-semibold mt-4 mb-2" for="delivery">
                Delivery Time (e.g. 3 days)
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="delivery"
                type="number"
                placeholder="Days"
              />
              <label class="block font-semibold mt-4 mb-2" for="revision">
                price
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="revision"
                type="number"
              />
              <label class="block font-semibold mt-4 mb-2" for="features">
                Add Features
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="feature1"
                type="text"
                placeholder="e.g. page design"
              />
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="feature2"
                type="text"
                placeholder="e.g. file uploading"
              />
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="feature3"
                type="text"
                placeholder="e.g. setting up a domain"
              />
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                id="feature4"
                type="text"
                placeholder="e.g. hosting"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
