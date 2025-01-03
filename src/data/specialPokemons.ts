import starEmoji from 'src/assets/star-emoji.png'
import pooEmoji from 'src/assets/poo-emoji.png'
import transparent from 'src/assets/transparent.png'
import circleArrow from 'src/assets/circle-arrow.png'
import gunEmoji from 'src/assets/gun-emoji.png'

const specialPokemons = [
  {
    id: -1,
    name: 'star',
    front_default: starEmoji,
    unlockAtStage: 1
  },
  {
    id: -1,
    name: 'star',
    front_default: starEmoji,
    unlockAtStage: 1
  },
  {
    id: -3,
    name: 'circleArrow',
    front_default: circleArrow,
    unlockAtStage: 2
  },
  {
    id: -4,
    name: 'gun',
    front_default: gunEmoji,
    unlockAtStage: 2
  },
  {
    id: -2,
    name: 'poo',
    front_default: pooEmoji,
    unlockAtStage: 3
  },
  {
    id: -9,
    name: 'empty',
    front_default: transparent,
    unlockAtStage: 3
  }
]

export default specialPokemons
