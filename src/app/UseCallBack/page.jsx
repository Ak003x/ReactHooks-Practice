"use client";
import React, { useCallback, useMemo, useState } from "react";
import List from "./List";

export default function UseCallBackPage() {
  const [number, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (increment) => {
      return [
        number + increment + 1,
        number + increment + 2,
        number + increment + 3,
      ];
    },
    [number]
  );

  // const getItems =useMemo( () => {
  //   return [number + 1, number + 2, number + 3];
  // },[number]);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((curr) => !curr)}> Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  );
}
