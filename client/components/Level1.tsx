import { useState } from 'react'
import { oneToTenTilesBoth, TilesNumberBoth } from '../data/tiles'
import RandomImageGenerator from './Image-random'
import GetRandomNumber from '../Models/random-number'
import AudioPlayer from './Click-L1'
import party from 'party-js'
import { MenuButton } from 'react-bootstrap-icons'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { CustomWiggle } from 'gsap/CustomWiggle'
gsap.registerPlugin(CustomEase, CustomWiggle) // register

function LevelOne() {
  const [randomNumber, setRandomNumber] = useState(GetRandomNumber())
  const tiles = oneToTenTilesBoth.tiles_number

  async function reset() {
    setRandomNumber(GetRandomNumber())
  }

  const handleClick = (
    tileNumber: number,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (tileNumber === randomNumber) {
      party.confetti(e.currentTarget, {
        count: party.variation.range(40, 80), // number of particles
        size: party.variation.range(1.5, 2.5), // particle size which makes it all look bigger (default is ~1)
      })
      setTimeout(reset, 1500)
    } else {
      // wiggle button that was clicked
      gsap.to(e.currentTarget, {
        duration: 0.5,
        x: 10,
        ease: 'wiggle(6)',
        clearProps: 'x',
      })
      // vibrate that won't work on desktop (only tablets/phones) so the if checks if it works and covers browsers too
      if (navigator.vibrate) {
        navigator.vibrate(50)
      }
    }
  }

  return (
    <>
      <div>
        <RandomImageGenerator randomNumber={randomNumber} />
        {/* <AudioPlayer /> */}
      </div>
      <div className="combo-tiles-numbers">
        {tiles.map((tile) => {
          return (
            <button
              className="combo-tile-button"
              key={tile.number}
              onClick={(e) => handleClick(tile.number, e)}
            >
              {tile.icons.map((IconComponent, index) => (
                <IconComponent
                  key={index}
                  size={24}
                  className="combo-number-icon"
                />
              ))}

              <h2 className="combo-tile-text">{tile.number_text}</h2>
            </button>
          )
        })}
      </div>
    </>
  )
}

export default LevelOne
