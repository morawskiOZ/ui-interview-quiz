import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Pokemons from '../../src/components/Pokemons'
import Names from '../api/names'

const QuizPage = () => {
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
          Pick your guild
        </Typography>
      </Box>
      <Box>
        <Link href="/quiz/frontend">FrontEnd</Link>
      </Box>
      <Box>
        <Link href="/quiz/backend">BackEnd</Link>
      </Box>
      <Box>
        <Link href="/quiz/fullstack">Fullstack</Link>
      </Box>
    </Container>
  )
}

export default QuizPage
