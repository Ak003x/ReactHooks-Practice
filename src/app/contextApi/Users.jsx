import React from "react";
import User from "./user";

function Users({ theme }) {
  const textStyle = {
    background: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };
  return (
    <div>
      <h1 style={textStyle}>Users</h1>
      <User theme={theme} textStyle={textStyle} />
    </div>
  );
}

export default Users;
