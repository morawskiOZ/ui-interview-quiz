import '@testing-library/jest-dom'
import {
  MOCK_POKEMON,
  MOCK_POKEMON_EXTENDED,
} from '../api-consumers/mocks/handlers/pokemons.mock'
import { act, fireEvent, render, screen, waitFor } from '../test-helpers'
import Pokemons from './Pokemons'
import userEvent from '@testing-library/user-event'

test('loads and displays pokemons', async () => {
  render(<Pokemons />)

  await waitFor(
    () =>
      expect(screen.getAllByRole('listitem')).toHaveLength(
        MOCK_POKEMON.results.length
      ),
    {
      timeout: 1000,
    }
  )

  const pokemonListItems = screen.getAllByRole('listitem')

  MOCK_POKEMON.results.forEach((pokemon, index) => {
    expect(pokemonListItems[index]).toHaveTextContent(pokemon.name)
  })
})

test('loads and displays more pokemons after clicking button', async () => {
  const user = userEvent.setup()
  render(<Pokemons />)

  await waitFor(() =>
    expect(screen.getAllByRole('listitem')).toHaveLength(
      MOCK_POKEMON.results.length
    )
  )
  const button = screen.getByRole('button')
  await user.click(button)

  expect(button).toBeEnabled()
  const pokemonListItems = screen.getAllByRole('listitem')
  MOCK_POKEMON_EXTENDED.results.forEach((pokemon, index) => {
    expect(pokemonListItems[index]).toHaveTextContent(pokemon.name)
  })
})
