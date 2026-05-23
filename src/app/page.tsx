"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const filteredColleges = colleges.filter((college: any) =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        AI College Discovery Platform
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search colleges..."
          className="w-full max-w-md p-3 rounded-lg border"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredColleges.map((college: any) => (
          <div
            key={college.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold">
                {college.name}
              </h2>

              <p className="text-gray-600 mt-2">
                📍 {college.location}
              </p>

              <p className="mt-2">
                💰 Fees: ₹{college.fees}
              </p>

              <p className="mt-2">
                ⭐ Rating: {college.rating}
              </p>

              <p className="mt-4 text-gray-700">
                {college.overview}
              </p>

              <p className="mt-3 font-medium">
                {college.placements}
              </p>

              <div className="flex gap-3 mt-5">
  <button className="bg-black text-white px-5 py-2 rounded-lg">
    View Details
  </button>

  <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
    Compare
  </button>
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}