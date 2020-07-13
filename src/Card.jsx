import React from "react";

export function Card({ content }) {
  return (
    <div>
      {content.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.air_date}</p>
            <p>{item.episode}</p>
          </div>
        );
      })}
    </div>
  );
}
