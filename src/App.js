import React, { useState, useEffect } from "react";

import "./App.css";

export function App() {
  const [name, setName] = useState("Rohit");

  function handleClick() {
    getData();
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await res.json();
      setName(data);
    }
  });

  return (
    <div>
      <h1>Hello from hooks {name}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
