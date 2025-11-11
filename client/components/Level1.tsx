import { useState } from 'react'
import { oneToTenTilesBoth } from '../data/tiles'
import RandomImageGenerator from './Image-random'
import GetRandomNumber from '../Models/random-number'
import AudioPlayer from './Click-L1'

function LevelOne() {
  const [randomNumber, setRandomNumber] = useState(GetRandomNumber())
  const tiles = oneToTenTilesBoth.tiles_number

  const handleClick = (tileNumber: number) => {
    if (tileNumber === randomNumber) {
      alert('Yay Well Done!')
      setRandomNumber(GetRandomNumber())
    } else {
      alert('Try Again!')
    }
  }

  return (
    <>
      <div>
        <RandomImageGenerator randomNumber={randomNumber} />
        <AudioPlayer />
      </div>
      <div className="combo-tiles-numbers">
        {tiles.map((tile) => {
          return (
            <button
              className="combo-tile-button"
              key={tile.number}
              onClick={() => handleClick(tile.number)}
            >
              <div>
                {tile.icons.map((IconComponent, index) => (
                  <IconComponent
                    key={index}
                    size={24}
                    className="combo-number-icon"
                  />
                ))}
              </div>
              {/* <div key={tile.number}>
                <tile.icons size={24} className="combo-number-icon" />
              </div> */}
              <h2 className="combo-tile-text">{tile.number_text}</h2>
            </button>
          )
        })}
      </div>
    </>
  )
}

export default LevelOne
