// Each animal has a display name and path to its PNG in public/images/png/
// import.meta.env.BASE_URL is '/' in dev and '/numbers-game/' on GitHub Pages
const base = import.meta.env.BASE_URL

export interface Animal {
  name: string
  image: string
}

export const animals: Animal[] = [
  { name: 'ant', image: `${base}images/png/ant.png` },
  { name: 'bird', image: `${base}images/png/bird.png` },
  { name: 'bumblebee', image: `${base}images/png/bumblebee.png` },
  { name: 'butterfly', image: `${base}images/png/butterfly.png` },
  { name: 'cat', image: `${base}images/png/cat.png` },
  { name: 'chicken', image: `${base}images/png/chicken.png` },
  { name: 'clown fish', image: `${base}images/png/clownfish.png` },
  { name: 'crab', image: `${base}images/png/crab.png` },
  { name: 'dog', image: `${base}images/png/dog.png` },
  { name: 'dolphin', image: `${base}images/png/dolphin.png` },
  { name: 'donkey', image: `${base}images/png/donkey.png` },
  { name: 'duck', image: `${base}images/png/duck.png` },
  { name: 'elephant', image: `${base}images/png/elephant.png` },
  { name: 'flamingo', image: `${base}images/png/flamingo.png` },
  { name: 'frog', image: `${base}images/png/frog.png` },
  { name: 'giraffe', image: `${base}images/png/giraffe.png` },
  { name: 'hamster', image: `${base}images/png/hamster.png` },
  { name: 'horse', image: `${base}images/png/horse.png` },
  { name: 'kangaroo', image: `${base}images/png/kangaroo.png` },
  { name: 'ladybug', image: `${base}images/png/ladybug.png` },
  { name: 'lizard', image: `${base}images/png/lizard.png` },
  { name: 'mouse', image: `${base}images/png/mouse.png` },
  { name: 'octopus', image: `${base}images/png/octopus.png` },
  { name: 'owl', image: `${base}images/png/owl.png` },
  { name: 'parrot', image: `${base}images/png/parrot.png` },
  { name: 'pig', image: `${base}images/png/pig.png` },
  { name: 'rabbit', image: `${base}images/png/rabbit.png` },
  { name: 'snail', image: `${base}images/png/snail.png` },
  { name: 'snake', image: `${base}images/png/snake.png` },
  { name: 'squirrel', image: `${base}images/png/squirrel.png` },
  { name: 'stingray', image: `${base}images/png/stingray.png` },
  { name: 'swan', image: `${base}images/png/swan.png` },
  { name: 'turtle', image: `${base}images/png/turtle.png` },
  { name: 'whale', image: `${base}images/png/whale.png` },
]
