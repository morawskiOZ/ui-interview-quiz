import axios from 'axios'
import { Name } from '../../../pages/api/names'
import { wait } from '../../helpers/wait'

export const fetchNames = async (): Promise<Name[]> => {
  const response = await axios.get(`http://localhost:3000/api/names`)
  await wait(2000)

  return response?.data
}
