// Each animal has a display name and path to its PNG in public/images/png/
// Add more entries here as you download additional icons
export interface Animal {
  name: string
  image: string
}

export const animals: Animal[] = [
  { name: 'parrot', image: '/images/png/parrot.png' },
  { name: 'toucan', image: '/images/png/toucan.png' },
  { name: 'bear', image: '/images/png/bear.png' },
  { name: 'lemur', image: '/images/png/lemur.png' },
]
