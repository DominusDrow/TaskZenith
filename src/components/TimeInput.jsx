import React, { useState } from "react";

const times = ["15min", "30min", "60min", "90min"];

const HorizontalRadioList = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState(times[0]);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="w-1/2 flex justify-center">

      {times.map((time) => (
        <label key={time} className="block w-13 ">
          <input
            type="radio"
            value={time}
            checked={selectedOption === time}
            onChange={ (e) => handleChange(e) }
            className="hidden"
          />
          <span
            className={`cursor-pointer ${
              selectedOption === time ? "bg-blue-700" : "bg-neutral-900"
            } p-2  text-white text-sm font-bold pl-10 pr-10 border-2 border-neutral-900`}
          >
            {time}
          </span>
        </label>
      ))}
    </div>
  );
};

export default HorizontalRadioList;

