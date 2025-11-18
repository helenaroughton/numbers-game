export interface Image {
  number: number
  image: string
  alt: string
  text: string
  audio: string
}

export interface Images {
  images: Image[]
}

export const data: Images = {
  images: [
    {
      number: 1,
      image: '/images/one-penguin.jpg',
      alt: 'one-penguin',
      text: 'penguins',
      audio: '/sounds/one.m4a',
    },
    {
      number: 2,
      image: '/images/two-dogs.jpg',
      alt: 'two-dogs',
      text: 'dogs',
      audio: '/sounds/two.m4a',
    },
    {
      number: 3,
      image: '/images/three-horses.jpg',
      alt: 'three-horses',
      text: 'horses',
      audio: '/sounds/three.m4a',
    },
    {
      number: 4,
      image: '/images/four-ducks.jpg',
      alt: 'four-ducks',
      text: 'ducks',
      audio: '/sounds/four.m4a',
    },
    {
      number: 5,
      image: '/images/five-cats.jpg',
      alt: 'five-cats',
      text: 'cats',
      audio: '/sounds/five.m4a',
    },
    {
      number: 6,
      image: '/images/six-pigs.jpg',
      alt: 'six-pigs',
      text: 'pigs',
      audio: '/sounds/six.m4a',
    },
    {
      number: 7,
      image: '/images/seven-monkeys.jpg',
      alt: 'seven-monkeys',
      text: 'monkeys',
      audio: '/sounds/seven.m4a',
    },
    {
      number: 8,
      image: '/images/eight-birds.jpg',
      alt: 'eight-birds',
      text: 'birds',
      audio: '/sounds/eight.m4a',
    },
    {
      number: 9,
      image: '/images/nine-rabbits.jpg',
      alt: 'nine-rabbits',
      text: 'rabbits',
      audio: '/sounds/nine.m4a',
    },
    {
      number: 10,
      image: '/images/ten-dinosaurs.jpg',
      alt: 'ten-dinosaurs',
      text: 'dinosaurs',
      audio: '/sounds/ten.m4a',
    },
  ],
}
