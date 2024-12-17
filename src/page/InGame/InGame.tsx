import { useState } from 'react'
import usePokemon from 'src/hooks/usePokemon'
import { PokemonType } from 'src/types/poke.type'
import PokeBall from 'src/components/Pokeball'
import loading from 'src/assets/loading.gif'

export interface SelectingBallType {
  index: number
  id: number
  name: string
}

const InGame = () => {
  const pokemonList = usePokemon(10)

  const [selectingBall, setSelectingBall] = useState<SelectingBallType[]>([])
  const [matchingPair, setMatchingPair] = useState<number[][]>([])

  const handleSelectBall = (pokeball: SelectingBallType) => {
    if (selectingBall.length >= 2) return

    const newSelection = [...selectingBall, pokeball]
    setSelectingBall(newSelection)

    setTimeout(() => {
      if (newSelection.length === 2) {
        const [first, second] = newSelection
        if (first.id === second.id) {
          setSelectingBall([])
          setMatchingPair((prev) => [...prev, [first.index, second.index]])

          return
        } else setSelectingBall([])
      }
    }, 400)
  }

  // loading screen
  if (!pokemonList.length) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-300">
        <div className="-translate-y-16">
          <img src={loading} alt="loading" className="max-w-80" />
          <h2 className="glowing text-center text-3xl font-semibold text-slate-600">Loading</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-300 px-32">
      <section className="pb-10 pt-14">
        <div className="grid grid-cols-6 place-items-center gap-y-[50px]">
          {pokemonList.map((pokemon: PokemonType, index) => (
            <PokeBall
              key={index}
              index={index}
              pokemon={pokemon}
              selectingBall={selectingBall}
              handleSelectBall={handleSelectBall}
              matchingPair={matchingPair}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
export default InGame
