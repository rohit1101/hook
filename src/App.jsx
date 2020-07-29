import React, { useEffect, useState } from "react"
import { Card } from "./Card"

import "./App.css"

export function App() {
  const [currentState, setEpisodes] = useState([])
  const [currentPage, setPage] = useState([])
  const [currentValue, setValue] = useState("")
  const [currentError, setError] = useState("")
  const [currentLoad, setLoading] = useState(false)

  async function getData(url = `https://rickandmortyapi.com/api/episode`) {
    setLoading(true)
    const res = await fetch(url)
    const data = await res.json()

    if (data.error) {
      setError(data.error)
      setLoading(false)
    }
    if (!data.error) {
      setError("")
      setEpisodes(data.results)
      setPage(data.info)
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  async function handleNextClick(e) {
    e.preventDefault()
    if (currentPage.next) {
      setLoading(true)
      const res = await fetch(currentPage.next)
      const data = await res.json()
      setEpisodes(data.results)
      setPage(data.info)
      setLoading(false)
    }
  }

  async function handlePrevClick(e) {
    e.preventDefault()

    if (currentPage.prev) {
      setLoading(true)
      const res = await fetch(currentPage.prev)
      const data = await res.json()

      setEpisodes(data.results)
      setPage(data.info)
      setLoading(false)
    }
  }

  async function handleChange(e) {
    setLoading(true)
    setValue(e.target.value)
    if (currentValue) {
      getData(`https://rickandmortyapi.com/api/episode/?name=${e.target.value}`)
    }
    if (currentValue === "") {
      setLoading(true)
      getData()
    }
  }

  return (
    <div className="block">
      <h1 className="title">Rick and Morty Episode filter</h1>
      <button className="button is-primary" onClick={handlePrevClick}>
        Previous
      </button>

      <button className="button is-primary" onClick={handleNextClick}>
        Next
      </button>
      <div className="field has-addons">
        <div className="control">
          <label className="label">Search Episode</label>
          <input
            className="input is-info is-small is-hovered"
            type="text"
            placeholder="Enter episode Name"
            onChange={handleChange}
            value={currentValue}
          />
        </div>
      </div>

      <Card content={currentState} er={currentError} load={currentLoad} />
    </div>
  )
}
