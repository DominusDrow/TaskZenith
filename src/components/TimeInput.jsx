import React, { useState } from "react";

const HorizontalRadioList = () => {
  const [selectedOption, setSelectedOption] = useState("30min");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-1/2 flex justify-center">
      <label className="block w-20 mr-2">
        <input
          type="radio"
          value="15min"
          checked={selectedOption === "15min"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <span
          className={`cursor-pointer ${
            selectedOption === "15min" ? "bg-blue-700" : "bg-gray-500"
          } p-2 rounded-full`}
        >
          15min
        </span>
      </label>
      <label className="block w-20 mr-2">
        <input
          type="radio"
          value="30min"
          checked={selectedOption === "30min"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <span
          className={`cursor-pointer ${
            selectedOption === "30min" ? "bg-blue-700" : "bg-gray-500"
          } p-2 rounded-full`}
        >
          30min
        </span>
      </label>
      <label className="block w-20 mr-2">
        <input
          type="radio"
          value="60min"
          checked={selectedOption === "60min"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <span
          className={`cursor-pointer ${
            selectedOption === "60min" ? "bg-blue-700" : "bg-gray-500"
          } p-2 rounded-full`}
        >
          60min
        </span>
      </label>
      <label className="block w-20">
        <input
          type="radio"
          value="90min"
          checked={selectedOption === "90min"}
          onChange={handleOptionChange}
          className="hidden"
        />
        <span
          className={`cursor-pointer ${
            selectedOption === "90min" ? "bg-blue-700" : "bg-gray-500"
          } p-2 rounded-full`}
        >
          90min
        </span>
      </label>
    </div>
  );
};

export default HorizontalRadioList;

