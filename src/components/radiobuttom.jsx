import React, { useState } from "react";

const colors = ["red", "orange", "green"];

const ColorRadioButtons = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="flex">
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
            onChange={(e) => setSelectedColor(e.target.value)}
            style={{ height: 0, width: 0 }}
          />
          <span
            title={color}
            className={`ml-2 cursor-pointer rounded-full h-6 w-6 ${`bg-${color}-500`} ${
              selectedColor === color ? `border-2 border-${color}-500` : ""
            }`}
            onClick={() => setSelectedColor(color)}
          ></span>
        </label>
      ))}
    </div>
  );
};

export default ColorRadioButtons;

