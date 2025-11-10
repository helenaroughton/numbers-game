import { data, Image } from '../data/level-one'

interface Props {
  randomNumber: number
}

function RandomImageGenerator({ randomNumber }: Props) {
  const images = data.images
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
