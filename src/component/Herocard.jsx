import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const ImageOverlayComponent = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedTimeRange, setSelectedTimeRange] = useState(null);
  const history = useHistory();

  const handleLocationChange = (selectedOption) => {
    setSelectedLocation(selectedOption);
  };

  const handleTimeRangeChange = (selectedOption) => {
    setSelectedTimeRange(selectedOption);
  };

  const handleGetCar = () => {
    // Check if all required options are selected
    if (
      selectedStartDate &&
      selectedEndDate &&
      selectedLocation &&
      selectedTimeRange
    ) {
      // Generate the URL with selected options
      const url = `/car-results/${selectedStartDate}/${selectedEndDate}/${selectedLocation.value}/${selectedTimeRange.value}`;

      // Navigate to the car results page
      history.push(url);
    }
  };

  const timeOptions = [
    { value: "9am-12pm", label: "9 AM - 12 PM" },
    { value: "1pm-4pm", label: "1 PM - 4 PM" },
    { value: "5pm-8pm", label: "5 PM - 8 PM" },
  ];

  

  return (
    <div className="relative">
      <img
        src={process.env.PUBLIC_URL + "/web_banner.png"}
        alt="Image"
        className="h-96 w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="py-5 px-5 mb-20 max-w-40 h-46 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-white text-3xl font-bold">
              The perfect car for your next trip is just around the corner
              <br />
              Book your drive now!
            </h1>
          </div>
          <div className="flex flex-col items-end">
            <div className="px-20 py-5 w-full bg-white rounded-full relative">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="mb-2 sm:mr-4">
                  <DatePicker
                    selected={selectedStartDate}
                    onChange={setSelectedStartDate}
                    placeholderText="Start Date"
                    className="text-black text-sm bg-white"
                  />
                </div>
                <div className="mb-2 sm:mr-4">
                  <Select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    options={[
                      { value: "Coimbatore", label: "Location 1" },
                      { value: "Chennai", label: "Location 2" },
                      { value: "Banglore", label: "Location 3" },
                    ]}
                    placeholder="Location"
                    className="text-black text-sm bg-white"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center mt-2">
                <div className="mb-2 sm:mr-4">
                  <DatePicker
                    selected={selectedEndDate}
                    onChange={setSelectedEndDate}
                    placeholderText="End Date"
                    className="text-black text-sm bg-white"
                  />
                </div>
                <div className="mb-2 sm:mr-4">
                  <Select
                    value={selectedTimeRange}
                    onChange={handleTimeRangeChange}
                    options={timeOptions}
                    placeholder="Time Range"
                    className="text-black text-sm bg-white"
                  />
                </div>
                <div className="mt-2 sm:mt-0">
                  <button
                    onClick={handleGetCar}
                    className="text-black text-sm font-bold bg-lime-500 px-4 py-2 rounded-full"
                  >
                    Get car
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageOverlayComponent;
