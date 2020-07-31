import React from "react"

export function Card({ content, er, load }) {
  return (
    <div className="columns">
      {load ? (
        "Loading"
      ) : er ? (
        <div>{er}</div>
      ) : (
        content.map((item) => {
          return (
            <div className="column">
              <h1 className="title">{item.name}</h1>
              <p className="subtitle">{item.air_date}</p>
              <p className="">{item.episode}</p>
            </div>
          )
        })
      )}
    </div>
  )
}
