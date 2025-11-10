import { To } from 'react-router'
export interface NumberBoth {
  // can refactor by making this extension of N.S
  number: number
  image: string
  alt: string
  number_text: string
}
export interface NumberSymbol {
  number: number
  image: string
  alt: string
}

export interface NumberWritten {
  number: number
  number_text: string
}

export interface TilesNumberBoth {
  tiles_number: NumberBoth[]
}

export interface TilesSymbol {
  tiles_symbol: NumberSymbol[]
}

export interface TilesWritten {
  tiles_written: NumberWritten[]
}

export const oneToTenTilesBoth: TilesNumberBoth = {
  tiles_number: [
    {
      number: 1,
      image: '/images/png/1.png',
      alt: '1',
      number_text: 'one',
    },
    {
      number: 2,
      image: '/images/png/2.png',
      alt: '2',
      number_text: 'two',
    },
    {
      number: 3,
      image: '/images/png/3.png',
      alt: '3',
      number_text: 'three',
    },
    {
      number: 4,
      image: '/images/png/4.png',
      alt: '4',
      number_text: 'four',
    },
    {
      number: 5,
      image: '/images/png/5.png',
      alt: '5',
      number_text: 'five',
    },
    {
      number: 6,
      image: '/images/png/6.png',
      alt: '6',
      number_text: 'six',
    },
    {
      number: 7,
      image: '/images/png/7.png',
      alt: '7',
      number_text: 'seven',
    },
    {
      number: 8,
      image: '/images/png/8.png',
      alt: '8',
      number_text: 'eight',
    },
    {
      number: 9,
      image: '/images/png/9.png',
      alt: '9',
      number_text: 'nine',
    },
    {
      number: 10,
      image: '/images/png/10.png',
      alt: '10',
      number_text: 'ten',
    },
  ],
}

export const oneToTenTilesText: TilesWritten = {
  tiles_written: [
    {
      number: 1,
      number_text: 'one',
    },
    {
      number: 2,
      number_text: 'two',
    },
    {
      number: 3,
      number_text: 'three',
    },
    {
      number: 4,
      number_text: 'four',
    },
    {
      number: 5,
      number_text: 'five',
    },
    {
      number: 6,
      number_text: 'six',
    },
    {
      number: 7,
      number_text: 'seven',
    },
    {
      number: 8,
      number_text: 'eight',
    },
    {
      number: 9,
      number_text: 'nine',
    },
    {
      number: 10,
      number_text: 'ten',
    },
  ],
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
