import type { Animal } from '../data/animals'

interface Props {
  animal: Animal
  count: number
}

// Maps count to a CSS class so icon size can be controlled (and scaled) entirely in CSS
function countClass(count: number): string {
  if (count <= 5) return 'count-xs'
  if (count <= 10) return 'count-sm'
  if (count <= 15) return 'count-md'
  return 'count-lg'
}

function AnimalGrid({ animal, count }: Props) {
  return (
    <div className={`animal-grid ${countClass(count)}`}>
      {Array.from({ length: count }).map((_, i) => (
        <img
          key={i}
          src={animal.image}
          alt={animal.name}
          className="animal-icon"
        />
      ))}
    </div>
  )
}

export default AnimalGrid
