import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

const ComponentA = () => {
  const [user, setuser] = useState("Dark Piodos");
  return (
    <div className="component-box">
      Component A<h3>Hello {user}</h3>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
};

export default ComponentA;

// Provider Component

// 1. import {createContext} from “react”;
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={value}>
// <Child/>
// </MyContext.Provider>

// Consumer Components

// 1. import React, {useContext} from ‘react’;
// 2. import {MyContext} from “./ComponentA”;
// 3. const value=useContext(MyContext);
