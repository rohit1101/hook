import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import "./App.css";

export function App() {
  const [currentState, setEpisodes] = useState([]);
  const [currentPage, setPage] = useState([]);
  // const [currentFilterState, setFilter] = useState([]);

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

  function handleChange(e) {
    if (e.target.value.trim()) {
      const newState = currentState.filter((item) => {
        return item.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      console.log(newState);
      setEpisodes(newState);
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
        <input
          type="text"
          placeholder="Enter episode Name"
          onChange={handleChange}
        />
      </label>
      <Card content={currentState} />
    </div>
  );
}
