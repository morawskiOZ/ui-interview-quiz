import axios from 'axios'
import { Name } from '../../../pages/api/names'
import { wait } from '../../helpers/wait'

export const fetchPokemonNames = async (total: number): Promise<any> => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${total}`
  )
  // await wait(4000)

  return response?.data
}
