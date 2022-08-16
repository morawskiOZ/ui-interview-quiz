import React, { useState, useEffect } from 'react'
import MuiCard, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

interface Props {}

export const Card = ({ children, ...rest }: CardProps) => {
  const { sx, ...restProps } = rest

  const cardProps: CardProps = {
    sx: { minWidth: 280, m: 2, minHeight: 100, ...sx },
    ...restProps,
  }

  return <MuiCard {...cardProps}>{children}</MuiCard>
}
