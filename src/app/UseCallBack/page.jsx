import React from "react";

export default function UseCallBack() {
  const [number, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
}
return (
  <div style={theme}>
    <input
      type="number"
      value={number}
      onChange={(e) => setNum(e.target.value)}
    />
    <button onClick={() => setDark((curr) => !curr)}> Toggle Theme</button>
  </div>
);
