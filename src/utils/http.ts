import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { PokemonType } from 'src/types/poke.type'
import { GetPokemonListResponse, GetPokemonDetailsResponse } from 'src/types/respone.type'

// class Http {
//   readonly instance: AxiosInstance
//   constructor() {
//     this.instance = axios.create({
//       baseURL: 'https://pokeapi.co/api/v2/pokemon',
//       timeout: 5000,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//   }
// }
// const http = new Http().instance

const http: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

http.interceptors.response.use(
  (response: AxiosResponse<GetPokemonListResponse | GetPokemonDetailsResponse>) => {
    const pokemonListData = response.data
    // check if the response has a results key

    if ((pokemonListData as GetPokemonListResponse).results) return response
    else {
      const data = response.data as GetPokemonDetailsResponse

      const obj: PokemonType = {
        id: data.id,
        name: data.name,
        front_default: data.sprites.front_default
      }

      response.data = {
        ...response.data,
        basicData: obj
      }
      return response
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default http
