import React, { useState, useRef, useEffect } from "react";

const AppUseRef = () => {
  // Sample Here
  const [number, setNumber] = useState(0);
  useEffect(() => {
    console.log("COMPONENT IS  RENDERED!");
  }, []);
  function handleClick() {
    setNumber((n) => n + 1);
    console.log(`The button is triggered! ${number}`);
  }
  // End sample here

  //   Start useRef() Hook Lesson Here

  const inputRef = useRef(null);
  //   End useRef() Hook Lesson Here

  function handleUseRefButton() {
    inputRef.current.focus();
  }

  const refPlayOne = useRef(null);
  const refPlayTwo = useRef(null);
  const refPlayThree = useRef(null);

  function playInput1() {
    refPlayOne.current.focus();
    refPlayOne.current.style.backgroundColor = "gray";
    refPlayTwo.current.style.backgroundColor = "";
    refPlayThree.current.style.backgroundColor = "";
  }
  function playInput2() {
    refPlayTwo.current.focus();
    refPlayOne.current.style.backgroundColor = "";
    refPlayTwo.current.style.backgroundColor = "gray";
    refPlayThree.current.style.backgroundColor = "";
  }
  function playInput3() {
    refPlayThree.current.focus();
    refPlayOne.current.style.backgroundColor = "";
    refPlayTwo.current.style.backgroundColor = "";
    refPlayThree.current.style.backgroundColor = "gray";
  }
  return (
    <div>
      <div className="ref-container-buttonInput">
        <button onClick={playInput1}>Click Me One</button>
        <input ref={refPlayOne} type="text" />
        <br />
        <hr />
        <button onClick={playInput2}>Click Me two</button>
        <input ref={refPlayTwo} type="text" />
        <br />
        <hr />
        <button onClick={playInput3}>Click Me Three</button>
        <input ref={refPlayThree} type="text" />
        <br />
        <hr />
      </div>
      <button onClick={handleClick}>Click Button</button>

      {/* This is for useRef Example */}

      <div>
        <button onClick={handleUseRefButton}>CLICK THIS USE REF BUTTON</button>
        <input ref={inputRef} type="text" />
      </div>
    </div>
  );
};

export default AppUseRef;
