export interface GetPokemonDetailsResponse {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  basicData: {
    id: GetPokemonDetailsResponse['id']
    name: GetPokemonDetailsResponse['name']
    front_default: GetPokemonDetailsResponse['sprites']['front_default']
  }
}

export interface GetPokemonListResponse {
  results: {
    name: string
    url: string
  }[]
}
