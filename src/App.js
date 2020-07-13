import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import "./App.css";

export function App() {
  const [currentState, setEpisodes] = useState([]);
  const [currentPage, setPage] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await res.json();
      setEpisodes(data.results);
      setPage(data.info);
    }

    getData();
  }, []);

  return (
    <div>
      <Card content={currentState} />
    </div>
  );
}
