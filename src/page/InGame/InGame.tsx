import { useEffect, useState } from 'react'
import usePokemon from 'src/hooks/usePokemon'
import { useStore } from 'src/store'
import { PokemonType } from 'src/types/poke.type'
import PokeBall from 'src/components/Pokeball'
import loading from 'src/assets/loading.gif'
import findPairs from 'src/utils/findPairs'

export interface SelectingBallType {
  index: number
  id: number
  name: string
}

const InGame = () => {
  const pokemonList = usePokemon(4)
  const { score, setScore } = useStore()

  const [selectingBall, setSelectingBall] = useState<SelectingBallType[]>([])
  const [matchedPair, setMatchedPair] = useState<number[][]>([])
  const [streak, setStreak] = useState(0)
  // flag to check if the game has opened a random matched pair when streak divides by 4
  const [hasOpenedPair, setHasOpenedPair] = useState(false)

  useEffect(() => {
    if (streak) {
      setScore(matchedPair, streak)

      // check if streak is divisible by 4 and has not opened a random matched pair
      if (streak % 4 === 0 && !hasOpenedPair) {
        const pairs = findPairs(pokemonList)

        const remainingPairs = pairs.filter((pair) => {
          return !matchedPair.some((p) => p.includes(pair[0]) || p.includes(pair[1]))
        })

        const timer = setTimeout(() => {
          if (remainingPairs.length > 0) {
            // open 1 random matched pair
            const randomPair = remainingPairs[Math.floor(Math.random() * remainingPairs.length)]
            setMatchedPair((prev) => [...prev, randomPair])
          }
          setHasOpenedPair(true)
        }, 200)

        return () => clearTimeout(timer)
      }

      // Reset hasOpenedPair if the streak is not divisible by 4
      if (streak % 4 !== 0) {
        setHasOpenedPair(false)
      }
    }
  }, [streak, pokemonList, matchedPair, hasOpenedPair, setScore])

  const handleSelectBall = (pokeball: SelectingBallType) => {
    if (selectingBall.length >= 2) return

    const newSelection = [...selectingBall, pokeball]
    setSelectingBall(newSelection)

    setTimeout(() => {
      if (newSelection.length === 2) {
        const [first, second] = newSelection
        if (first.id === second.id) {
          setSelectingBall([])
          setStreak((pre) => pre + 1)
          setMatchedPair((prev) => [...prev, [first.index, second.index]])
        } else {
          setSelectingBall([])
          setStreak(0)
        }
      } else {
        // if open poo or empty ball as the first selection then set
        // selecting ball to empty array but still keep the steak
        if (newSelection[0].id === -9 || newSelection[0].id === -2) {
          setSelectingBall([])
          return
        }
      }
      // wait 400ms for the ball open/close animation to finish
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
      <div className="flex items-center justify-evenly text-2xl text-blue-500">
        <div className="pt-5">Streak: {streak}</div>
        <div className="pt-5">Score: {score}</div>
      </div>
      <section className="pb-10 pt-14">
        <div className="grid grid-cols-6 place-items-center gap-y-[50px]">
          {pokemonList.map((pokemon: PokemonType, index) => (
            <PokeBall
              key={index}
              index={index}
              pokemon={pokemon}
              selectingBall={selectingBall}
              handleSelectBall={handleSelectBall}
              matchingPair={matchedPair}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
export default InGame
