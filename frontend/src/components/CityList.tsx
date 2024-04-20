import React, { useState, useEffect } from "react";
import axios from "axios";
import City from "../../models/City";
import "../styles/tailwind.css";
import "../App.css";

interface CityListProps {
  cities: City[];
}

function CityList({ cities: initialCities }: CityListProps) {
  const [cities, setCities] = useState<City[]>(initialCities || []);
  console.log("Initial Cities:", initialCities);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (initialCities && initialCities.length > 0) {
      setCities(initialCities);
      setLoading(false);
    }
  }, [initialCities]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedCities = cities.slice(startIndex, endIndex);

  return (
    <div className="content_city">
      {loading ? (
        <p></p>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                >
                  City Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Count
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedCities.map((city) => (
                <tr
                  key={city._id}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    {city.name}
                  </th>
                  <td className="px-6 py-4">{city.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {initialCities.length > itemsPerPage && (
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={() =>
                  setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                }
                disabled={currentPage === 1}
              >
                Previous Page
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                disabled={endIndex >= cities.length}
              >
                Next Page
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CityList;
