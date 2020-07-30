import React from "react"
import { Tile } from "./Tile"

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
            <div className="columns">
              <Tile item={item} />
            </div>
          )
        })
      )}
    </div>
  )
}
