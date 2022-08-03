import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { NextPage } from 'next'
import * as React from 'react'
import Link from '../src/components/Link'
import Names from '../src/components/Names'
import Pokemons from '../src/components/Pokemons'

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
      </Box>
      <Box>
        <Link href="/quiz">TAKE A QUIZ</Link>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <React.Suspense fallback={<div>Loading pokemons...</div>}>
          <Pokemons />
        </React.Suspense>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <React.Suspense fallback={<div>Loading pokemons...</div>}>
          <Names />
        </React.Suspense>
      </Box>
    </Container>
  )
}

export default Home
