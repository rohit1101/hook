import React, { useEffect, useState } from "react";
import { Card } from "./Card";

import "./App.css";

export function App() {
  const [currentState, setEpisodes] = useState([]);
  const [currentPage, setPage] = useState([]);
  const [currentValue, setValue] = useState("");
  const [currentError, setError] = useState("");

  async function getData(url) {
    const res = await fetch(
      url ? url : "https://rickandmortyapi.com/api/episode"
    );

    if (res.error) {
      setError(res.error);
    }
    const data = await res.json();
    setEpisodes(data.results);
    setPage(data.info);
  }

  useEffect(() => {
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

  async function handleChange(e) {
    setValue(e.target.value);
    if (currentValue) {
      getData(
        `https://rickandmortyapi.com/api/episode/?name=${e.target.value}`
      );
    }
    if (currentValue === "") {
      getData();
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
          value={currentValue}
        />
      </label>

      <Card content={currentState} er={currentError} />
    </div>
  );
}
