import React from "react";

const ButtonOnClick = () => {
  const handleClick = () => {
    alert("You triggered me!!!!!!!");
  };
  const clickMe = (name) => {
    alert(`${name} stop clicking me`);
  };
  let count = 0;
  const nowClickMe = (name) => {
    if (count < 3) {
      count++;
      alert(`${name} you click me ${count} time/s`);
    } else {
      alert(`${name} stop clicking me!`);
    }
  };

  const handleEvent = (e) => {
    e.target.textContent = "Igit";
  };
  return (
    <div>
      <button onClick={handleClick}>Click Me Fellas!</button>
      <button
        onClick={() => {
          clickMe("Darwin");
        }}
      >
        Click Me 2!
      </button>
      <button
        onClick={() => {
          nowClickMe("Darwin");
        }}
      >
        Click me please!s
      </button>
      <button
        onClick={(e) => {
          handleEvent(e);
        }}
      >
        Click Me Handle Event
      </button>
    </div>
  );
};

export default ButtonOnClick;
