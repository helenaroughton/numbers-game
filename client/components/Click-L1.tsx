// // click function
// // probably need some use state to hold the click answer?
// // need a click handle?
// // need an if check that if it's wrong or right then what
// // if wrong needs to keep trying
// // if right then YAY celebrate thing AND regenerate image and page render?
// // might need use state for whole page render? idk..
// // do I need to separate out the image from level 1 return?

// import { useState } from 'react'
// import LevelOne from './Level1'
// import { NumberBoth } from '../data/tiles'
// import RandomImageGenerator from  './Image-random' // is importing this and calling the function here going to generate again?

// export function numbers({NumberBoth}:{NumberBoth : NumberBoth}){
//   const [tile, setTile] = useState(false) // not sure whether I need this or what for or what to go in ()
//   const [correct, setCorrect] = useState(false)
//   const {randomNumber} = RandomImageGenerator() // why can't I destructure the variable?

//   const isTileCorrect = (tile: NumberBoth) => {
//       setCorrect(true)
//   }

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     const clickedTile = event.target

//     setTile(true)
//     if (clickedTile.number !== randomNumber) // why does this property not exist???
//     return (<p>try again!</p>) // NEED TO CHANGE THESE TO FUNCTIONS THAT HAVE FUN EFFECTS
//     return (<p>YAY WELL DONE!</p>) // NEED TO CHANGE THESE TO FUNCTIONS THAT HAVE FUN EFFECTS
//   }

//   onclick={() => {
//     setTile(true)
//       //   if (color == '#000000') {
//       //     return
//       //   } else {
//       //     ;() => setColor(getColor)
//       //   }
//       // }}
//   }
//   }

// }
