import { useState } from 'react'
import { oneToTenTiles, oneToTenTilesText } from '../data/tiles'
import RandomImageGenerator from './Image-random'

function LevelTwo() {
  const tiles = oneToTenTiles.tiles_symbol
  const tilesText = oneToTenTilesText.tiles_written
  return (
    <>
      <div className="tiles-numbers">
        {tiles.map((tile) => {
          return (
            <button className="tile-button" key={tile.number}>
              <img className="tile-image" src={tile.image} alt={tile.alt} />
            </button>
          )
        })}
      </div>
      <div className="tiles-text">
        {tilesText.map((tile) => {
          return (
            <button className="tile-button-text" key={tile.number}>
              {tile.number_text}
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

export default LevelTwo
