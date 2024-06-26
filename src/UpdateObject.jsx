import React, { useState } from "react";

const UpdateObject = () => {
  const [car, setCar] = useState({
    year: 2024,
    make: "Fold",
    model: "Mustang",
  });

  function handleYearChange(event) {
    setCar((car) => ({ ...car, year: event.target.value }));
  }
  function handleMakeChange(event) {
    setCar((car) => ({ ...car, make: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((car) => ({ ...car, model: event.target.value }));
  }
  return (
    <div>
      <p>
        Your favorite car is: {car.year}
        {car.make}
        {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />

      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
};

export default UpdateObject;
