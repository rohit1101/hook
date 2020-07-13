import React, { useEffect, useState } from "react";

import "./App.css";

export function App() {
  const [currentState, setName] = useState([]);

  // function handleClick() {}

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await res.json();
      console.log(data);
      setName(data.results);
    }
    getData();
  }, []);

  return (
    <div>
      <h1>
        {currentState.map((item) => {
          return item.name;
        })}
      </h1>
    </div>
  );
}
