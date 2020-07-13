import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import "./App.css";

export function App() {
  const [currentState, setEpisodes] = useState([]);
  const [currentImg, setImg] = useState([]);
  const [currentPage, setPage] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      const data = await res.json();
      console.log(data);
      setEpisodes(data.results);
      setPage(data.info);
    }

    async function getImage() {
      const res = await fetch("https://rickandmortyapi.com/api/character/1");
      const data = await res.json();
      setImg(data.image);
    }

    getData();
    getImage();
  }, []);

  return (
    <div>
      <Card content={currentState} />
      {currentState.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.air_date}</p>
            <p>{item.episode}</p>
          </div>
        );
      })}
    </div>
  );
}
