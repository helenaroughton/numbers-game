export interface Image {
  number: number
  image: string
  alt: string
}

export interface Images {
  images: Image[]
}

export const data: Images = {
  images: [
    {
      number: 1,
      image: '/images/placeholder-two.jpg',
      alt: 'two-dogs',
    },
    {
      number: 2,
      image: '/images/placeholder-three.jpg',
      alt: 'two-dogs',
    },
    {
      number: 3,
      image: '/images/placeholder-two.jpg',
      alt: 'two-dogs',
    },
    {
      number: 4,
      image: '/images/placeholder-three.jpg',
      alt: 'two-dogs',
    },
    {
      number: 5,
      image: '/images/placeholder-two.jpg',
      alt: 'two-dogs',
    },
    {
      number: 6,
      image: '/images/placeholder-three.jpg',
      alt: 'two-dogs',
    },
    {
      number: 7,
      image: '/images/placeholder-two.jpg',
      alt: 'two-dogs',
    },
    {
      number: 8,
      image: '/images/placeholder-three.jpg',
      alt: 'two-dogs',
    },
    {
      number: 9,
      image: '/images/placeholder-two.jpg',
      alt: 'two-dogs',
    },
    {
      number: 10,
      image: '/images/placeholder-three.jpg',
      alt: 'two-dogs',
    },
  ],
}
