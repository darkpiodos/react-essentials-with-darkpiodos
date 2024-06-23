import React, { useState, useEffect } from "react";

const UseEffectWindowWidthHeight = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event Listener Added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event Listener Removed");
    };
  }, []);

  useEffect(() => {
    document.title = `Size : ${width} X ${height}`;
  }, [width, height]);
  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <div>
      <p>Window Width is: {width}px</p>
      <p>Window Height is: {height}px</p>
    </div>
  );
};

export default UseEffectWindowWidthHeight;
