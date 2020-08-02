import React from "react"
import "./index.css"

export function Card({ content, er, load }) {
  return (
    <div className="columns is-multiline is-centered">
      {load ? (
        "Loading"
      ) : er ? (
        <div>{er}</div>
      ) : (
        content.map((item) => {
          return (
            <div className="column is-4 text">
              <div className="box has-text-centered">
                <h1 className="title is-4">{item.name}</h1>
                <p className="subtitle is-5 has-text-grey-dark has-text-weight-semi-bold">
                  {item.air_date}
                </p>
                <p className="subtitle is-6 has-text-grey has-text-weight-medium">
                  {item.episode}
                </p>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
