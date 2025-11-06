"use client";
import React, { useRef, useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const InputRef = useRef();
  console.log("Getting render");

  const display = () => {
    console.log(InputRef.current.value);
  };

  return (
    <div>
      <h1>INPUT</h1>
      <input
        ref={InputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>My name is - {input}</p>
      <button onClick={display}>Show me </button>
      <p>num - {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => (count === 0 ? null : setCount(count - 1))}>
        -
      </button>
    </div>
  );
}
