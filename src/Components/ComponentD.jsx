import React, { useContext } from "react";
import { UserContext } from "./ComponentA";
import { UserContextPractice } from "./PracticeUseContext";

const ComponentD = () => {
  const user = useContext(UserContext);
  const user2 = useContext(UserContextPractice);
  return (
    <div className="component-box">
      Component D <h3>Bye {user}</h3>I dont Know what to do <b>{user2}</b>
    </div>
  );
};

export default ComponentD;
