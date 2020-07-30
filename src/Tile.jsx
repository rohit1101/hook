import React from "react"

export function Tile({ item }) {
  return (
    <div className="tile is-parent is-4">
      <article className="tile is-child box" key={item.id}>
        <h1 className="title">{item.name}</h1>
        <p className="subtitle">{item.air_date}</p>
        <p className="">{item.episode}</p>
      </article>
    </div>
  )
}
