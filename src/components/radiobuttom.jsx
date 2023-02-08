import React, { useState } from "react";

const colors = ["green", "orange", "red"];
const priorities = ["low", "medium", "high"];

const ColorRadioButtons = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
    onChange(priorities[colors.indexOf(e.target.value)]);
  };

  return (
    <div className="flex justify-between w-1/3">
      {colors.map((color) => (
        <label
          key={color}
          className="inline-flex items-center mx-1 mb-1"
        >
          <input
            type="radio"
            name="color"
            className="appearance-none form-radio"
            value={color}
            checked={selectedColor === color}
            onChange={(e) => handleChange(e)}
            style={{ height: 0, width: 0 }}
          />
          <span
            title={`Priority: ${priorities[colors.indexOf(color)]}`}
            className={`ml-2 cursor-pointer rounded-full h-7 w-7 ${`bg-${color}-500`} ${
              selectedColor === color ? `border-2 border-${color}-500` : ""
            }`}
            onClick={() => handleChange(color)}
          ></span>
        </label>
      ))}
    </div>
  );
};

export default ColorRadioButtons;

