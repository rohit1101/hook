import React from "react"

export function Item({ item }) {
  return (
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <div className="tile is-child box has-text-centered">
          <h1 className="title">{item.name}</h1>
          <p className="subtitle">{item.air_date}</p>
          <p className="">{item.episode}</p>
        </div>
      </div>
    </div>
  )
}
