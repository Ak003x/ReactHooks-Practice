"use client";
import React, { useState, createContext } from "react";
import Users from "./Users";

export const ThemeContext = createContext();

function ContextApiPage({}) {
  const [theme, setTheme] = useState("light");

  const textStyle = {
    background: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
  };

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme,textStyle }}>
      <h1>Page</h1>
      <button onClick={toggleTheme}>Click Me</button>
      <Users />
    </ThemeContext.Provider>
  );
}

export default ContextApiPage;
