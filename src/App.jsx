import React, { useEffect, useState } from "react"
import { Card } from "./Card"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"

// import Tab from "@material-ui/core/Tab"
// import Typography from "@material-ui/core/Typography"
// import Box from "@material-ui/core/Box"

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
    <div>
      <AppBar position="sticky" color="transparent" centered>
        <Tabs
          variant="fullWidth"
          // value={value}
          // onChange={handleChange}
          aria-label="nav tabs example"
        >
          <ButtonGroup
            color="transparent"
            aria-label="outlined primary button group"
          >
            <Button variant="outlined">One</Button>
            <Button variant="outlined">Two</Button>
            <Button variant="outlined">Three</Button>
          </ButtonGroup>
          {/* <LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>

      {/* <TabPanel value={value} index={0}>
        Page One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Two
      </TabPanel> */}
      {/* <TabPanel>Page Three</TabPanel> */}

      <label>
        Search Episode
        <input
          type="text"
          placeholder="Enter episode Name"
          onChange={handleChange}
          value={currentValue}
        />
      </label>

      <Card content={currentState} er={currentError} load={currentLoad} />
    </div>
  )
}
