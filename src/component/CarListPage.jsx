import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CarListPage = () => {
  const newlocation = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [startDate, setStartDate] = useState(queryParams.get("startDate"));
  const [endDate, setEndDate] = useState(queryParams.get("endDate"));
  const [location, setLocation] = useState(queryParams.get("location"));
  const [timeRange, setTimeRange] = useState(queryParams.get("timeRange"));
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars based on the selected date, location, and time range
    // You can make an API call here or use mock data

    // Example API call using fetch
    const fetchCars = async () => {
      try {
        const response = await fetch(
          `your-api-endpoint?startDate=${startDate}&endDate=${endDate}&location=${location}&timeRange=${timeRange}`
        );
        const data = await response.json();
        setCars(data); // Update the cars state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchCars(); // Call the fetchCars function
  }, [startDate, endDate, location, timeRange]);

  return (
    <div>
      <h1>Available Cars</h1>
      {cars.map((car) => (
        <div key={car.id}>
          <h2>{car.name}</h2>
          <p>{car.description}</p>
          {/* Display other car details */}
        </div>
      ))}
    </div>
  );
};

export default CarListPage;
