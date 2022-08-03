import { setupServer } from 'msw/node'
import { pokemonHandlers } from './handlers/pokemons.mock'

export const mswServer = setupServer(...pokemonHandlers)
