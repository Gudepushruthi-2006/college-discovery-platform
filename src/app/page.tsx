"use client";

const colleges = [
  {
    id: 1,
    name: "IIT Hyderabad",
    location: "Hyderabad",
    fees: 200000,
    rating: 4.8,
    overview: "Top engineering institute in India.",
    placements: "Highest package 60 LPA",
    image:
      "https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg",
  },
  {
    id: 2,
    name: "NIT Warangal",
    location: "Warangal",
    fees: 150000,
    rating: 4.5,
    overview: "Premier National Institute of Technology.",
    placements: "Highest package 45 LPA",
    image:
      "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        AI College Discovery Platform
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {colleges.map((college) => (
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