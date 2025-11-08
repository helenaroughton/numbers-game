import { useState } from 'react'
import GetRandomNumber from '../Models/random-number'
import { data } from '../data/level-one'

function LevelOne() {
  const images = data.images
  const randomNumber = GetRandomNumber()

  // I need it to map through the images array and then return/display whichever
  // image number matches the random generated number
  // it needs to do this on perhaps level one render load

  return (
    <div>
      <h2>What Number am I??</h2>

      <div>
        {images.map((image) => {
          return <img key={image.number} src={image.image} alt={image.alt} />
        })}
      </div>
    </div>
  )
}

export default LevelOne
