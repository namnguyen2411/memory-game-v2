import { useState, useEffect } from 'react'
import pokemonApi from 'src/apis/pokemon.api'
import { PokemonType } from 'src/types/poke.type'
import specialPokemons from 'src/data/specialPokemons'

const usePokemon = (limit: number) => {
  const { getPokemonList, getPokemonDetails } = pokemonApi
  const [pokemonList, setPokemonList] = useState<PokemonType[]>([])

  useEffect(() => {
    const controller = new AbortController()
    // random offset number from 0 to 1290
    // to get random pokemon list
    const offset = Math.floor(Math.random() * 1290)

    const fetchPokemons = async () => {
      const res = await getPokemonList(limit, offset, controller.signal)
      const pokemonListData = res.data.results

      const promises = pokemonListData.map(async (pokemon) => {
        const res = await getPokemonDetails(pokemon.name)
        return res.data.basicData
      })

      const pokemonDetailsData = await Promise.all(promises)

      // duplicate pokemon details data
      pokemonDetailsData.push(...pokemonDetailsData)

      // add special pokemons
      pokemonDetailsData.push(...specialPokemons)

      // shuffle pokemon details data
      pokemonDetailsData.sort(() => Math.random() - 0.5)

      setPokemonList(() => pokemonDetailsData)
    }

    void fetchPokemons()

    return () => controller.abort()
  }, [limit, getPokemonDetails, getPokemonList])

  return pokemonList
}

export default usePokemon
