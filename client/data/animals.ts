// Each animal has a display name and path to its PNG in public/images/png/
// Add more entries here as you download additional icons
export interface Animal {
  name: string
  image: string
}

// import.meta.env.BASE_URL is '/' in dev and '/numbers-game/' on GitHub Pages
const base = import.meta.env.BASE_URL

export const animals: Animal[] = [
  { name: 'parrot', image: `${base}images/png/parrot.png` },
  { name: 'toucan', image: `${base}images/png/toucan.png` },
  { name: 'bear', image: `${base}images/png/bear.png` },
  { name: 'lemur', image: `${base}images/png/lemur.png` },
]
