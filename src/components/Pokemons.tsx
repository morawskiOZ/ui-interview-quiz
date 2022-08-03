import { Box, Button, Typography } from '@mui/material'
import { useState, useTransition } from 'react'
import { useGetPokemonNames } from '../api-consumers/pokemons/useGetPokemonNames'

const Pokemons = (): JSX.Element => {
  const [namesLimit, setNamesLimit] = useState(50)
  const [isPending, startTransition] = useTransition()
  const { data } = useGetPokemonNames(namesLimit)

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Pokemons
      </Typography>
      <Box>
        <Button
          disabled={isPending}
          onClick={() => {
            startTransition(() => setNamesLimit((limit) => limit + 50))
          }}
        >
          Get More Names
        </Button>
      </Box>

      <Box
        sx={{
          opacity: isPending ? 0.6 : 1,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
        component="ul"
      >
        {(data as any)?.results?.map((pokemon) => (
          <Box
            sx={{
              m: 3,
            }}
            key={pokemon.name}
            component="li"
          >
            {pokemon.name}
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Pokemons
