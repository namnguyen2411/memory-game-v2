import { PokemonType } from 'src/types/poke.type'
import { SelectingBallType } from 'src/page/InGame/InGame'

interface PokeballProps {
  pokemon: PokemonType
  index: number
  selectingBall: SelectingBallType | null
  setSelectingBall: (pokemon: SelectingBallType) => void
  matchingPair: number[][]
}

const Pokeball = ({ pokemon, index, setSelectingBall, matchingPair }: PokeballProps) => {
  const { id, name, front_default } = pokemon

  return (
    <div
      className="pokeball relative col-span-1 aspect-square h-[110px] cursor-pointer rounded-full"
      onClick={() => {
        setSelectingBall({ index, id, name })
      }}
    >
      <img
        src={front_default}
        alt={name}
        draggable={false}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-300"
      />
      <div
        className={`z-10 flex h-[47%] items-end justify-center rounded-t-full bg-red600 transition duration-300${
          matchingPair.flat().includes(index) ? 'animate-fade' : ''
        }`}
      >
        <div className="h-[1.2rem] w-10 rounded-t-full bg-slate-300">
          <div className="mt-[1px] h-full w-full rounded-t-full bg-slate-300"></div>
        </div>
      </div>

      <div
        className={`mx-auto flex h-[6%] w-[95%] items-center justify-center bg-black transition duration-300${
          matchingPair.flat().includes(index) ? 'animate-fade' : ''
        }`}
      >
        <div className="flex aspect-square h-12 items-center justify-center rounded-full bg-black">
          <div className="flex aspect-square h-8 items-center justify-center rounded-full bg-white">
            <div className="aspect-square h-4 rounded-full border-2 border-black bg-white"></div>
          </div>
        </div>
      </div>

      <div
        className={`h-[47%] rounded-b-full bg-white transition duration-300${
          matchingPair.flat().includes(index) ? 'animate-fade' : ''
        }`}
      />
    </div>
  )
}

export default Pokeball
