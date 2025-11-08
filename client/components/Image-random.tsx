import GetRandomNumber from '../Models/random-number'
import { data, Image } from '../data/level-one'

function RandomImageGenerator() {
  const images = data.images
  const randomNumber = GetRandomNumber()
  console.log(randomNumber)
  const randomImage: Image = images.find(
    (image) => image.number === randomNumber,
  )

  return (
    <div className="image-container">
      <img
        className="numberImage"
        key={randomImage.number}
        src={randomImage.image}
        alt={randomImage.alt}
      />
    </div>
  )
}

export default RandomImageGenerator
