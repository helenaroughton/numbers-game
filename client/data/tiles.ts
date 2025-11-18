import {
  Icon,
  Icon1Square,
  Icon2Square,
  Icon3Square,
  Icon4Square,
  Icon5Square,
  Icon6Square,
  Icon7Square,
  Icon8Square,
  Icon9Square,
  Icon0Square,
} from 'react-bootstrap-icons'
export interface NumberBoth {
  // can refactor by making this extension of N.S
  number: number
  icons: Icon[]
  image: string
  alt: string
  number_text: string
  audio: string
}
export interface NumberSymbol {
  number: number
  icons: Icon[]
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
      icons: [Icon1Square],
      image: '/images/png/1.png',
      alt: '1',
      number_text: 'one',
      audio: '/sounds/one.m4a',
    },
    {
      number: 2,
      icons: [Icon2Square],
      image: '/images/png/2.png',
      alt: '2',
      number_text: 'two',
      audio: '/sounds/two.m4a',
    },
    {
      number: 3,
      icons: [Icon3Square],
      image: '/images/png/3.png',
      alt: '3',
      number_text: 'three',
      audio: '/sounds/three.m4a',
    },
    {
      number: 4,
      icons: [Icon4Square],
      image: '/images/png/4.png',
      alt: '4',
      number_text: 'four',
      audio: '/sounds/four.m4a',
    },
    {
      number: 5,
      icons: [Icon5Square],
      image: '/images/png/5.png',
      alt: '5',
      number_text: 'five',
      audio: '/sounds/five.m4a',
    },
    {
      number: 6,
      icons: [Icon6Square],
      image: '/images/png/6.png',
      alt: '6',
      number_text: 'six',
      audio: '/sounds/six.m4a',
    },
    {
      number: 7,
      icons: [Icon7Square],
      image: '/images/png/7.png',
      alt: '7',
      number_text: 'seven',
      audio: '/sounds/seven.m4a',
    },
    {
      number: 8,
      icons: [Icon8Square],
      image: '/images/png/8.png',
      alt: '8',
      number_text: 'eight',
      audio: '/sounds/eight.m4a',
    },
    {
      number: 9,
      icons: [Icon9Square],
      image: '/images/png/9.png',
      alt: '9',
      number_text: 'nine',
      audio: '/sounds/nine.m4a',
    },
    {
      number: 10,
      icons: [Icon1Square, Icon0Square],
      image: '/images/png/10.png',
      alt: '10',
      number_text: 'ten',
      audio: '/sounds/ten.m4a',
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
      icon: Icon1Square,
      image: '/images/png/1.png',
      alt: '1',
    },
    {
      number: 2,
      icon: Icon2Square,
      image: '/images/png/2.png',
      alt: '2',
    },
    {
      number: 3,
      icon: Icon3Square,
      image: '/images/png/3.png',
      alt: '3',
    },
    {
      number: 4,
      icon: Icon4Square,
      image: '/images/png/4.png',
      alt: '4',
    },
    {
      number: 5,
      icon: Icon5Square,
      image: '/images/png/5.png',
      alt: '5',
    },
    {
      number: 6,
      icon: Icon6Square,
      image: '/images/png/6.png',
      alt: '6',
    },
    {
      number: 7,
      icon: Icon7Square,
      image: '/images/png/7.png',
      alt: '7',
    },
    {
      number: 8,
      icon: Icon8Square,
      image: '/images/png/8.png',
      alt: '8',
    },
    {
      number: 9,
      icon: Icon9Square,
      image: '/images/png/9.png',
      alt: '9',
    },
    {
      number: 10,
      icons: [Icon1Square, Icon0Square],
      image: '/images/png/10.png',
      alt: '10',
    },
  ],
}
