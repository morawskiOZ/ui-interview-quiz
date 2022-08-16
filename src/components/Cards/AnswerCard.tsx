import React, { useState, useEffect } from 'react'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Card } from '../@Shared/Card'

interface Props {
  question: string
}

export const AnswerCard = ({ question }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {question}
        </Typography>
      </CardContent>
    </Card>
  )
}
