import React, { useState, createContext } from "react";
import ComponentD from "./ComponentD";

export const UserContextPractice = createContext();

const PracticeUseContext = () => {
  const [user, setuser] = useState("The Black Alpha Man");
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      PracticeUseContext
      {user}
      <UserContextPractice.Provider value={user}>
        <ComponentD />
      </UserContextPractice.Provider>
    </div>
  );
};

export default PracticeUseContext;
