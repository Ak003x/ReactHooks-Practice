"use client";
import React, { useState, useEffect } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log("Getting items");
  }, [getItems]);

  return (
    <div>
      {items.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
}
