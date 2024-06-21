import React from "react";

const UserList = (props) => {
  const category = props.category;
  const itemList = props.items;
  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.lastName}, &nbsp; {item.firstName}&nbsp;<b>{item.age}</b>
    </li>
  ));

  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  );
};

export default UserList;
