import { useState } from 'react'
import Instruction from 'src/components/Instruction'
import DecorativePokeball from 'src/components/DecorativePokeball'
import pokemon_logo from 'src/assets/logo.svg'
import version from 'src/assets/text-version.png'
import { useStore } from 'src/store'

const Home = () => {
  const { setGameStarted } = useStore()

  const [showInstruction, setShowInstruction] = useState(false)

  const handleToggleInstruction = () => setShowInstruction(!showInstruction)

  if (showInstruction) {
    return <Instruction />
  }

  return (
    <div className="h-screen bg-black">
      <section className="item-center mx-auto flex flex-col gap-10 pt-[5%] text-center text-white">
        <h1 className="text-cyan-400">MEMORY MATCH GAME</h1>
        <div className="mx-auto mt-20 flex w-[80%] items-center md:mt-10 md:w-[60%]">
          <DecorativePokeball />

          {/* logo */}
          <div className="mx-auto w-[50%] md:max-w-[450px]">
            <img src={pokemon_logo} alt="pokemon-logo" className="w-full" />
            <img src={version} className="mx-auto w-[300px]" />
          </div>

          <DecorativePokeball />
        </div>

        <div className="mt-16 flex flex-col gap-4">
          <button
            onClick={() => setGameStarted()}
            className="hover:glowing mx-auto w-fit rounded-lg px-6 py-2 text-4xl font-semibold text-white md:text-5xl"
          >
            START
          </button>
          <button
            onClick={handleToggleInstruction}
            className="hover:glowing mx-auto w-fit rounded-lg px-6 py-2 text-4xl font-semibold text-white md:text-5xl"
          >
            INSTRUCTION
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
