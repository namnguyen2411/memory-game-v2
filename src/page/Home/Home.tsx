import Pokeball from 'src/components/PokeBall'
import pokemon_logo from 'src/assets/logo.svg'
import version from 'src/assets/text-version.png'

const Home = () => {
  return (
    <div className="h-screen bg-black">
      <section className="item-center mx-auto flex flex-col gap-10 pt-[5%] text-center text-white">
        <h1 className="text-cyan-400">MEMORY MATCH GAME</h1>
        <div className="mx-auto mt-20 flex w-[80%] items-center md:mt-10 md:w-[60%]">
          <Pokeball />

          {/* logo */}
          <div className="mx-auto w-[50%] md:max-w-[450px]">
            <img src={pokemon_logo} alt="pokemon-logo" className="w-full" />
            <img src={version} className="mx-auto w-[300px]" />
          </div>

          <Pokeball />
        </div>

        <button className="hover:glowing mx-auto mt-20 w-fit rounded-lg px-6 py-2 text-5xl font-semibold text-red-500 md:text-6xl">
          START
        </button>
      </section>
    </div>
  )
}

export default Home
