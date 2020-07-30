import React from "react"
import { Item } from "./Item"
export function Tile({ item }) {
  return (
    <article className="column" key={item.id}>
      <Item item={item} />
    </article>
  )
}
