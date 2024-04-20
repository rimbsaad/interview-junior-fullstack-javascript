import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/tailwind.css";
import CityList from "./CityList";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCityList, setShowCityList] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const fetchCities = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/cities");
      setSearchResults(response.data);
      setShowCityList(true);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleSearch = async () => {
    try {
      let url = "http://localhost:3000/api/cities";
      if (searchTerm) {
        url += `?cityName=${searchTerm}`;
      }
      const response = await axios.get(url);
      setSearchResults(response.data);
      setShowCityList(true);
    } catch (error) {
      console.error("Error searching cities:", error);
    }
  };
  const handleInput = async (value) => {
    setSearchTerm(value);
    if (!value) {
      fetchCities();
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm) {
      handleSearch();
    } else {
      setSearchTerm("");
      fetchCities();
    }
  };

  return (
    <>
    <div className="content_search">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search City..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onInput={(e) => handleInput(e.target.value)}
            required
          />
        </div>
        <div className="button_search">
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
        </div>
      </form>
    </div>
      {showCityList && <CityList cities={searchResults} />}
    </>
  );
}

export default Search;
