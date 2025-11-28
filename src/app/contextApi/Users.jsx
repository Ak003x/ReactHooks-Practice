import User from "./user";
import React, { useContext } from "react";
import { ThemeContext } from "./page";

function Users({}) {
  const { theme, textStyle } = useContext(ThemeContext);
  return (
    <div>
      <h1 style={textStyle}>Users</h1>
      <User />
    </div>
  );
}

export default Users;
