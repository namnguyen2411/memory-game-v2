import clsx from 'clsx'
import { PokemonType } from 'src/types/poke.type'
import { SelectingBallType } from 'src/page/InGame/InGame'

interface PokeballProps {
  pokemon: PokemonType
  index: number
  selectingBall: SelectingBallType[]
  handleSelectBall: (pokeball: SelectingBallType) => void
  matchingPair: number[][]
}

const Pokeball = ({ pokemon, index, selectingBall, handleSelectBall, matchingPair }: PokeballProps) => {
  const { id, name, front_default } = pokemon
  const isSelected = selectingBall.some((ball) => ball.index === index)
  const isMatching = matchingPair.flat().includes(index)

  return (
    <div
      className={clsx(
        'relative col-span-1 aspect-square h-[100px] cursor-pointer rounded-full',
        isSelected || isMatching ? 'pointer-events-none' : 'pointer-events-auto'
      )}
      onClick={() => {
        handleSelectBall({ index, id, name })
      }}
    >
      <img
        src={front_default}
        alt={name}
        draggable={false}
        className={clsx(
          'absolute left-1/2 top-1/2 aspect-auto max-w-[86px] -translate-x-1/2 -translate-y-1/2 object-cover transition duration-300',
          isMatching || isSelected ? 'opacity-100' : 'opacity-0'
        )}
      />
      <div
        className={clsx(
          'z-10 flex h-[47%] items-end justify-center rounded-t-full bg-red600 transition duration-300',
          isMatching ? 'animate-fade' : '',
          isSelected ? '-translate-y-[70%]' : ''
        )}
      >
        <div className="h-[1.2rem] w-10 rounded-t-full bg-slate-300">
          <div className="mt-[1px] h-full w-full rounded-t-full bg-slate-300" />
        </div>
      </div>

      <div
        className={clsx(
          'mx-auto flex h-[6%] w-[95%] items-center justify-center bg-black transition duration-300',
          isSelected ? 'opacity-0' : 'opacity-100',
          isMatching ? 'animate-fade' : ''
        )}
      >
        <div className="flex aspect-square h-12 items-center justify-center rounded-full bg-black">
          <div className="flex aspect-square h-8 items-center justify-center rounded-full bg-white">
            <div className="aspect-square h-4 rounded-full border-2 border-black bg-white" />
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'h-[47%] rounded-b-full bg-white transition duration-300',
          isMatching ? 'animate-fade' : '',
          isSelected ? 'translate-y-[70%]' : ''
        )}
      />
    </div>
  )
}

export default Pokeball
