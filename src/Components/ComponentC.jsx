import React, { useContext } from "react";
import ComponentD from "./ComponentD";

import { UserContext } from "./ComponentA";
const ComponentC = () => {
  const user = useContext(UserContext);
  return (
    <div className="component-box">
      Component C <h3>Ohahay {user}</h3>
      <ComponentD />
    </div>
  );
};

export default ComponentC;
