import { useEffect } from 'react'
import { data, Image } from '../data/level-one'

interface Props {
  randomNumber: number
}

function RandomImageGenerator({ randomNumber }: Props) {
  const images = data.images
  const randomImage: Image = images.find(
    (image) => image.number === randomNumber,
  )

  const handleAudio = () => {
    if (randomImage?.audio) {
      const audio = new Audio(randomImage.audio)
      audio.play().catch((error) => {
        console.error('Audio playback failed:', error)
      })
    }
  }

  return (
    <div className="image-container">
      <h2 id="number-question">How many {randomImage.text} are there?</h2>
      <button className="image-button" onClick={handleAudio}>
        <img
          className="numberImage"
          key={randomImage.number}
          src={randomImage.image}
          alt={randomImage.alt}
        />
      </button>
    </div>
  )
}

export default RandomImageGenerator
