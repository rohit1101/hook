import React, { useState, useEffect } from "react";

import "./App.css";

export function App() {
  const [name, setName] = useState(0);

  // function handleClick() {}

  useEffect(async () => {
    const res = await fetch("https://rickandmortyapi.com/api/episode");
    const data = await res.json();
    console.log(data.results);
  });

  return (
    <div>
      <h1>Hello from {name}</h1>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
}
