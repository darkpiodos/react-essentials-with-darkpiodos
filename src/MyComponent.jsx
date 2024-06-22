import React, { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState();
  const nameHandleClick = () => {
    setName("Darwin Piodos");
  };

  const [age, setAge] = useState(0);
  const incrementAge = () => {
    setAge(age + 1);
  };
  const [isEmployed, setIsEmployed] = useState(false);
  const toggleEmploymentStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <h2>Name: {name}</h2>
      <button onClick={nameHandleClick}>Set Name</button>
      <h2>Age: {age}</h2>
      <button onClick={incrementAge}>Increment Age</button>
      <h2>Is employed: {isEmployed ? "Yes" : "No"}</h2>
      <button onClick={toggleEmploymentStatus}>Toogle Status</button>
    </div>
  );
};

export default MyComponent;
