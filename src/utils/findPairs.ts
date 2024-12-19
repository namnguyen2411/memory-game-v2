import { PokemonType } from 'src/types/poke.type'

const findPairs = (pokemonList: PokemonType[]) => {
  const indexPairs: number[][] = []
  const seenIndices = new Set<number>() // Để tránh trùng lặp

  pokemonList.forEach((pokemon, index) => {
    if (seenIndices.has(index)) return // Bỏ qua nếu index đã được xử lý

    for (let j = index + 1; j < pokemonList.length; j++) {
      if (seenIndices.has(j)) continue // Bỏ qua nếu đã xử lý

      if (pokemonList[j].id === pokemon.id) {
        indexPairs.push([index, j])
        seenIndices.add(index) // Đánh dấu đã xử lý
        seenIndices.add(j) // Đánh dấu đã xử lý
        break
      }
    }
  })

  return indexPairs
}

export default findPairs
