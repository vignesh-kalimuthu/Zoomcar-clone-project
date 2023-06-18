import React from "react";
import { useParams } from "react-router";

const CarResultsPage = () => {
  const { startDate, endDate, location, timeRange } = useParams();

  // Dummy car data for demonstration
  const carData = [
    {
      id: 1,
      name: "Car 1",
      image: "/car1.jpg",
      description: "This is car 1",
    },
    {
      id: 2,
      name: "Car 2",
      image: "/car2.jpg",
      description: "This is car 2",
    },
    // Add more car objects as needed
  ];

  return (
    <div>
      <h1>Car Results</h1>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <p>Location: {location}</p>
      <p>Time Range: {timeRange}</p>

      <div className="grid grid-cols-3 gap-4">
        {carData.map((car) => (
          <div key={car.id} className="bg-white p-4">
            <img src={car.image} alt={car.name} className="w-full" />
            <h3 className="text-lg font-bold mt-2">{car.name}</h3>
            <p className="mt-1">{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarResultsPage;
