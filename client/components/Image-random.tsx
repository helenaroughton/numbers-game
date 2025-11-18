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
      <h2 id="number-question">How many {randomImage.text} are there?</h2>
      {/* <audio controls preload>
        <track
          kind="captions"
          srcLang="en"
          src="${randomImage.number}"
          label="english-captions"
        ></track>
        <source src={randomImage.audio} type="audio" />
      </audio> */}

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
