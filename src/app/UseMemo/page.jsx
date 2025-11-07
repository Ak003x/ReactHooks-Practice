"use client";
import React, { useMemo, useState } from "react";

export default function UseMemoPage() {
  const [number, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const doubtNumber = useMemo(() => {
    return slow(number);
  }, [number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => setDark((curr) => !curr)}> Toggle Theme</button>
      <div style={theme}>{doubtNumber}</div>
    </div>
  );
}

function slow(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
}
