import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Student from "./assets/Student";
import UserGreeting from "./UserGreeting";
import List from "./List";
import UserList from "./UserList";
import JobList from "./JobList";
import ButtonOnClick from "./ButtonOnClick";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import OnChangeComponent from "./OnChangeComponent";
import ColorPicker from "./ColorPicker";
import UpdaterFunction from "./UpdaterFunction";
import UpdateObject from "./UpdateObject";
import UpdateArrayState from "./UpdateArrayState";
import ArrayOfObjectUpdate from "./ArrayOfObjectUpdate";

const App = () => {
  // Userlist and map
  const users = [
    { id: 1, firstName: "Darwin", lastName: "Piodos", age: 23 },
    { id: 2, firstName: "Angel", lastName: "Piodos", age: 24 },
    { id: 3, firstName: "Ariel", lastName: "Bron", age: 50 },
    { id: 4, firstName: "Michelle", lastName: "Smith", age: 21 },
    { id: 5, firstName: "Gremma", lastName: "Page", age: 45 },
  ];

  // Occupation and map

  const titles = [
    {
      id: 6,
      department: "Software Development",
      role: "Front-end developer",
      salary: 15000,
    },
    {
      id: 7,
      department: "Project Management",
      role: "Portfolio manager",
      salary: 90000,
    },
    {
      id: 8,
      department: "Security",
      role: "Application security administrator",
      salary: 30000,
    },
    {
      id: 9,
      department: "Business Analyst",
      role: "Data scientist",
      salary: 50300,
    },
    {
      id: 10,
      department: "Network and System",
      role: "Computer systems manager",
      salary: 65000,
    },
  ];

  const jobs = [
    {
      id: 6,
      firstName: "Software Development",
      lastName: "Front-end developer",
      age: 15000,
    },
    {
      id: 7,
      firstName: "Project Management",
      lastName: "Portfolio manager",
      age: 90000,
    },
    {
      id: 8,
      firstName: "Security",
      lastName: "Application security administrator",
      age: 30000,
    },
    {
      id: 9,
      firstName: "Business Analyst",
      lastName: "Data scientist",
      age: 50300,
    },
    {
      id: 10,
      firstName: "Network and System",
      lastName: "Computer systems manager",
      age: 65000,
    },
  ];
  return (
    <>
      <h1>Update Array of Object On State</h1>
      <ArrayOfObjectUpdate />
      <hr />

      <h1>Update Array On State</h1>
      <UpdateArrayState />
      <hr />

      <h1>Update Object On State</h1>
      <UpdateObject />
      <hr />

      <h1>Updater Function</h1>
      <UpdaterFunction />

      <hr />

      <h1>Color Picker</h1>
      <ColorPicker />

      <hr />

      <h1>OnChange Event</h1>
      <OnChangeComponent />

      <hr />
      <h1>COUNTER JSX useState() React Hooks</h1>
      <Counter />

      <hr />

      <h1>useState() React Hooks</h1>
      <MyComponent />

      <h1>OnClick Event</h1>
      <ProfilePicture />

      <h1>OnClick Event</h1>
      <ButtonOnClick />
      <h1>Rendering List + Props I Guess???</h1>
      {jobs.length > 0 ? (
        <JobList
          items={titles}
          category="Job Titles & Roles and Its Respective Salaries"
        />
      ) : null}

      <UserList items={users} category="Users" />
      <UserList items={jobs} category="Sample Jobs" />

      <h1>Rendering List</h1>
      <List />
      <h1>Conditional Rendering : Sample false</h1>
      <UserGreeting isLoggedIn={false} username="DarkPiodos" />
      <h1>Conditional Rendering : Sample true</h1>
      <UserGreeting isLoggedIn={true} username="DarkPiodos" />
      <h1>Conditional Rendering : Ternary Operator</h1>
      <UserGreeting isLoggedIn={true} />
      <p style={{ margin: "2em" }}>
        Here I removed the username so the default props will appear which is
        the username "Guest"!
      </p>

      <h1>Props, Prop Types & Default Props </h1>
      <Student name="SpongeBob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={25} isStudent={true} />
      <Student name="Larry" />

      <h1>I made a Header Here!</h1>
      <Header />
      <h1>And now, Sample Cards of course!</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <h1>Another sample, food data in a variable</h1>
      <Food />
      <h1>And lastly, a footer</h1>
      <Footer />
    </>
  );
};

export default App;
