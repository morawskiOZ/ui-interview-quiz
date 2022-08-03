import { useQuery } from '@tanstack/react-query'
import { fetchNames } from './names.fetch'

export const useGetNames = () => {
  return useQuery(['names'], () => fetchNames())
}
