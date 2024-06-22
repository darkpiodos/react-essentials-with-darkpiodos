import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }
  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div style={{ backgroundColor: color }} className="color-display">
        <p>Selected Color : {color}</p>
      </div>
      <label htmlFor=""> Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;
