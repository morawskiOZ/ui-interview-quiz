import { useQuery } from '@tanstack/react-query'
import { fetchPokemonNames } from './pokemons.fetch'

export const useGetPokemonNames = (total: number) => {
  return useQuery(['names', total], () => fetchPokemonNames(total))
}
