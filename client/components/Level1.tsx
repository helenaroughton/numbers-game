import { useState } from 'react'
import { oneToTenTiles } from '../data/tiles'
import RandomImageGenerator from './Image-random'

function LevelOne() {
  const tiles = oneToTenTiles.tiles_symbol
  return (
    <>
      <div className="tiles">
        {tiles.map((tile) => {
          return (
            <button className="tile-button" key={tile.number}>
              <img className="tile-image" src={tile.image} alt={tile.alt} />
            </button>
          )
        })}
      </div>
      <div>
        <h2 id="number-question">What Number am I??</h2>
        <RandomImageGenerator />
      </div>
    </>
  )
}

export default LevelOne
