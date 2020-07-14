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

  async function handleNextClick(e) {
    e.preventDefault();
    if (currentPage.next) {
      const res = await fetch(currentPage.next);
      const data = await res.json();
      setEpisodes(data.results);
      setPage(data.info);
    }
  }

  async function handlePrevClick(e) {
    e.preventDefault();
    if (currentPage.prev) {
      const res = await fetch(currentPage.prev);
      const data = await res.json();
      setEpisodes(data.results);
      setPage(data.info);
    }
  }

  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" onClick={handlePrevClick}>
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" onClick={handleNextClick}>
            Next
          </a>
        </li>
      </ul>
      <label>
        Search Episode
        <input type="text" />
      </label>
      <Card content={currentState} />
    </div>
  );
}
