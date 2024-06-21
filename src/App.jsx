import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Student from "./assets/Student";
import UserGreeting from "./UserGreeting";
import List from "./List";

const App = () => {
  return (
    <>
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
