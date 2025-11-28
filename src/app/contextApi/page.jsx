"use client"
import React, { useState } from "react";

import Users from "./Users";

function ContextApiPage() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <h1>Page</h1>
      <button onClick={toggleTheme}>Click Me</button>
      <Users theme={theme} />
    </div>
  );
}

export default ContextApiPage;
