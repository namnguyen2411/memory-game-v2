import http from 'src/utils/http'
import { GetPokemonDetailsResponse, GetPokemonListResponse } from 'src/types/respone.type'

const getPokemonList = async (limit: number, offset: number, signal?: AbortSignal) =>
  http.get<GetPokemonListResponse>(`?limit=${limit}&offset=${offset}`, { signal })

const getPokemonDetails = async (name: string) => http.get<GetPokemonDetailsResponse>(`${name}`)

const pokemonApi = { getPokemonDetails, getPokemonList }
export default pokemonApi
