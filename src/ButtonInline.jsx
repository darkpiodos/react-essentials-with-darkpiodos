import React from "react";

const ButtonInline = () => {
  const styles = {
    backgroundColor: "green",
    color: "white",
    padding: " 10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    margin: "4px",
  };
  return (
    <div>
      <button style={styles}>Check Out</button>
    </div>
  );
};

export default ButtonInline;
