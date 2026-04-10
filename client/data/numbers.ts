// All tiles for 1-20 — the Level component filters to the relevant range
export interface Tile {
  number: number
  word: string
}

export const tiles: Tile[] = [
  { number: 1, word: 'one' },
  { number: 2, word: 'two' },
  { number: 3, word: 'three' },
  { number: 4, word: 'four' },
  { number: 5, word: 'five' },
  { number: 6, word: 'six' },
  { number: 7, word: 'seven' },
  { number: 8, word: 'eight' },
  { number: 9, word: 'nine' },
  { number: 10, word: 'ten' },
  { number: 11, word: 'eleven' },
  { number: 12, word: 'twelve' },
  { number: 13, word: 'thirteen' },
  { number: 14, word: 'fourteen' },
  { number: 15, word: 'fifteen' },
  { number: 16, word: 'sixteen' },
  { number: 17, word: 'seventeen' },
  { number: 18, word: 'eighteen' },
  { number: 19, word: 'nineteen' },
  { number: 20, word: 'twenty' },
]
