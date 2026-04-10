import type { Animal } from '../data/animals'

interface Props {
  animal: Animal
  count: number
}

// Returns a px size that shrinks as count grows, so icons always fit on screen
function iconSize(count: number): number {
  if (count <= 5) return 80
  if (count <= 10) return 64
  if (count <= 15) return 48
  return 36
}

function AnimalGrid({ animal, count }: Props) {
  const size = iconSize(count)

  return (
    <div className="animal-grid">
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          src={animal.image}
          alt={animal.name}
          className="animal-icon"
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  )
}

export default AnimalGrid
