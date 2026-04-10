import { useState } from 'react'
import { tiles } from '../data/numbers'
import { animals } from '../data/animals'
import type { Animal } from '../data/animals'
import AnimalGrid from './AnimalGrid'
import party from 'party-js'
import { gsap } from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { CustomWiggle } from 'gsap/CustomWiggle'
gsap.registerPlugin(CustomEase, CustomWiggle)

// Props this component accepts from App — it doesn't know which "level number" it is,
// just what range of numbers to use and whether to show the symbol alongside the word
interface Props {
  range: [number, number]
  mode: 'symbol-word' | 'word-only'
}

function randomInRange(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function pickRandomAnimal(): Animal {
  return animals[Math.floor(Math.random() * animals.length)]
}

function Level({ range, mode }: Props) {
  const [min, max] = range

  // The current question: how many of this animal?
  const [count, setCount] = useState(() => randomInRange(min, max))
  const [animal, setAnimal] = useState<Animal>(pickRandomAnimal)

  // Only show tiles within this level's range (e.g. 1-10 or 11-20)
  const levelTiles = tiles.filter((t) => t.number >= min && t.number <= max)

  function reset() {
    setCount(randomInRange(min, max))
    setAnimal(pickRandomAnimal())
  }

  function handleClick(
    tileNumber: number,
    e: React.MouseEvent<HTMLButtonElement>,
  ) {
    if (tileNumber === count) {
      // Correct — confetti then move to next question
      party.confetti(e.currentTarget, {
        count: party.variation.range(40, 80),
        size: party.variation.range(1.5, 2.5),
      })
      setTimeout(reset, 1000)
    } else {
      // Wrong — shake the button and vibrate on mobile
      gsap.to(e.currentTarget, {
        duration: 0.5,
        x: 10,
        ease: 'wiggle(6)',
        clearProps: 'x',
      })
      if (navigator.vibrate) {
        navigator.vibrate(50)
      }
    }
  }

  return (
    <div className="level">
      {/* Question: show N copies of the animal */}
      <div className="question">
        <h2 className="question-text">
          How many {animal.plural ?? `${animal.name}s`} are there?
        </h2>
        <AnimalGrid animal={animal} count={count} />
      </div>

      {/* Answer tiles — display changes based on mode prop */}
      <div className="tiles">
        {levelTiles.map((tile) => (
          <button
            key={tile.number}
            className="tile-button"
            onClick={(e) => handleClick(tile.number, e)}
          >
            {/* Only show the numeral in symbol-word mode */}
            {mode === 'symbol-word' && (
              <span className="tile-number">{tile.number}</span>
            )}
            <span className="tile-word">{tile.word}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Level
