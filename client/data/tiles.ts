export interface NumberSymbol {
  number: number
  image: string
  alt: string
}

export interface NumberWritten {
  number: string
}

export interface TilesSymbol {
  tiles_symbol: NumberSymbol[]
}

export interface TilesWritten {
  tiles_symbol: NumberWritten[]
}

export const oneToTenTiles: TilesSymbol = {
  tiles_symbol: [
    {
      number: 1,
      image: '/images/png/1.png',
      alt: '1',
    },
    {
      number: 2,
      image: '/images/png/2.png',
      alt: '2',
    },
    {
      number: 3,
      image: '/images/png/3.png',
      alt: '3',
    },
    {
      number: 4,
      image: '/images/png/4.png',
      alt: '4',
    },
    {
      number: 5,
      image: '/images/png/5.png',
      alt: '5',
    },
    {
      number: 6,
      image: '/images/png/6.png',
      alt: '6',
    },
    {
      number: 7,
      image: '/images/png/7.png',
      alt: '7',
    },
    {
      number: 8,
      image: '/images/png/8.png',
      alt: '8',
    },
    {
      number: 9,
      image: '/images/png/9.png',
      alt: '9',
    },
    {
      number: 10,
      image: '/images/png/10.png',
      alt: '10',
    },
  ],
}
