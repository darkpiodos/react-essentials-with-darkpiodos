import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./ComponentA";

const ComponentB = () => {
  const user = useContext(UserContext);
  return (
    <div className="component-box">
      Component B{" "}
      <h3>Now I know how to use useContext() Hook in React! {user}</h3>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
