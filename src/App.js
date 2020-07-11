import React, { useState } from "react";

import "./App.css";

export function App() {
  const [name, setName] = useState("Rohit");

  function handleClick() {
    setName("Batman");
  }

  return (
    <div>
      <h1>Hello from hooks {name}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
