import { useState } from 'react'
import { oneToTenTilesBoth } from '../data/tiles'
import RandomImageGenerator from './Image-random'
import GetRandomNumber from '../Models/random-number'

function LevelOne() {
  const [randomNumber, setRandomNumber] = useState(GetRandomNumber())
  const tiles = oneToTenTilesBoth.tiles_number

  const handleClick = (tileNumber: number) => {
    if (tileNumber === randomNumber) {
      alert('Correct!')
      setRandomNumber(GetRandomNumber())
    } else {
      alert('Wrong!')
    }
  }

  return (
    <>
      <div className="combo-tiles-numbers">
        {tiles.map((tile) => {
          return (
            <button
              className="combo-tile-button"
              key={tile.number}
              onClick={() => handleClick(tile.number)}
            >
              <img
                className="combo-tile-image"
                src={tile.image}
                alt={tile.alt}
              />
              <h2 className="combo-tile-text">{tile.number_text}</h2>
            </button>
          )
        })}
      </div>
      <div>
        <h2 id="number-question">How many am I??</h2>
        <RandomImageGenerator randomNumber={randomNumber} />
      </div>
    </>
  )
}

export default LevelOne
