import React from "react"

export function Card({ content, er, load }) {
  return (
    <div>
      {load ? (
        "Loading"
      ) : er ? (
        <div>{er}</div>
      ) : (
        content.map((item) => {
          return (
            <div className="tile is-ancestor">
              <div className="tile is-parent ">
                <div className="tile is-child box is-vertical" key={item.id}>
                  <h1 className="title">{item.name}</h1>
                  <p className="subtitle">{item.air_date}</p>
                  <p className="">{item.episode}</p>
                </div>
              </div>
            </div>
          )
        })
      )}
    </div>
  )
}
