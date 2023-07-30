import React, { useState } from "react";

function CarSearchForm() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send search query to server and display results
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">Find Your Dream Car</h2>
      <div className="flex flex-col md:flex-row md:gap-2">
        <label htmlFor="make" className="md:w-1/5 font-semibold">
          Make:
        </label>
        <input
          type="text"
          id="make"
          className="border p-2 md:w-3/5 rounded-lg"
          value={make}
          onChange={(event) => setMake(event.target.value)}
          placeholder="e.g. Toyota"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-2">
        <label htmlFor="model" className="md:w-1/5 font-semibold">
          Model:
        </label>
        <input
          type="text"
          id="model"
          className="border p-2 md:w-3/5 rounded-lg"
          value={model}
          onChange={(event) => setModel(event.target.value)}
          placeholder="e.g. Corolla"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-2">
        <label htmlFor="year" className="md:w-1/5 font-semibold">
          Year:
        </label>
        <input
          type="number"
          id="year"
          className="border p-2 md:w-3/5 rounded-lg"
          value={year}
          onChange={(event) => setYear(event.target.value)}
          placeholder="e.g. 2021"
          min="1900"
          max={new Date().getFullYear()}
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-2">
        <label htmlFor="min-price" className="md:w-1/5 font-semibold">
          Minimum Price:
        </label>
        <input
          type="number"
          id="min-price"
          className="border p-2 md:w-3/5 rounded-lg"
          value={minPrice}
          onChange={(event) => setMinPrice(event.target.value)}
          placeholder="e.g. 10000"
          min="0"
          max="999999999"
        />
      </div>
      <div className="flex flex-col md:flex-row md:gap-2">
        <label htmlFor="max-price" className="md:w-1/5 font-semibold">
          Maximum Price:
        </label>
        <input
          type="number"
          id="max-price"
          className="border p-2 md:w-3/5 rounded-lg"
          value={maxPrice}
          onChange={(event) => setMaxPrice(event.target.value)}
          placeholder="e.g. 50000"
          min="0"
          max="999999999"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300"
      >
        Search
      </button>
    </form>
  );
}
export default CarSearchForm;
