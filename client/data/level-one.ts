export interface Image {
  number: number
  image: string
  alt: string
  text: string
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
    },
    {
      number: 2,
      image: '/images/two-dogs.jpg',
      alt: 'two-dogs',
      text: 'dogs',
    },
    {
      number: 3,
      image: '/images/three-horses.jpg',
      alt: 'three-horses',
      text: 'horses',
    },
    {
      number: 4,
      image: '/images/four-ducks.jpg',
      alt: 'four-ducks',
      text: 'ducks',
    },
    {
      number: 5,
      image: '/images/five-cats.jpg',
      alt: 'five-cats',
      text: 'cats',
    },
    {
      number: 6,
      image: '/images/six-pigs.jpg',
      alt: 'six-pigs',
      text: 'pigs',
    },
    {
      number: 7,
      image: '/images/seven-monkeys.jpg',
      alt: 'seven-monkeys',
      text: 'monkeys',
    },
    {
      number: 8,
      image: '/images/eight-birds.jpg',
      alt: 'eight-birds',
      text: 'birds',
    },
    {
      number: 9,
      image: '/images/nine-rabbits.jpg',
      alt: 'nine-rabbits',
      text: 'rabbits',
    },
    {
      number: 10,
      image: '/images/ten-dinosaurs.jpg',
      alt: 'ten-dinosaurs',
      text: 'dinosaurs',
    },
  ],
}
