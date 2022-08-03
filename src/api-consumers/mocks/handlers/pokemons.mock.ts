import { rest } from 'msw'

export const MOCK_POKEMON = {
  results: [{ name: 'bulbasaur' }, { name: 'charmander' }],
}
export const MOCK_POKEMON_EXTENDED = {
  results: [
    { name: 'bulbasaur' },
    { name: 'charmander' },
    { name: 'squirtle' },
    { name: 'chikorita' },
  ],
}

const url = 'https://pokeapi.co/api/v2/pokemon'
const defaultLimitParam = 1

const getPokemonHandler = rest.get(url, async (req, res, ctx) => {
  if ((Number(req?.url?.searchParams.get('limit')) || defaultLimitParam) > 50) {
    return res(ctx.json(MOCK_POKEMON_EXTENDED))
  }
  return res(ctx.json(MOCK_POKEMON))
})

export const getPokemonHandlerException = rest.get(url, async (req, res, ctx) =>
  res(ctx.status(500), ctx.json({ message: 'Deliberately broken request' }))
)

export const pokemonHandlers = [getPokemonHandler]
