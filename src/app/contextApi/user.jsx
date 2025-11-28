import React, { useContext } from "react";
import { ThemeContext } from "./page";

function User() {
  const { theme } = useContext(ThemeContext);

  const textStyle = {
    background: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };
  return (
    <div>
      <h1 style={textStyle}>User</h1>
    </div>
  );
}

export default User;
