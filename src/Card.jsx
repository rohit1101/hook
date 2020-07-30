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


<div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
    
      <div class="tile is-parent is-vertical">
        <article class="tile is-child box">
          <!-- Put any content you want -->
        </article>
        <article class="tile is-child box">
          
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          
        </article>
      </div>
    </div>

    <div class="tile is-parent">
      <article class="tile is-child box">
        
      </article>
    </div>
  </div>

  <div class="tile is-parent">
    <article class="tile is-child box">
      
    </article>
  </div>
</div>