import { Button, CardActions } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Dispatch, SetStateAction } from 'react'
import { Card } from '../@Shared/Card'

interface Props {
  question: string
  showAnswer: boolean
  onShowAnswer: Dispatch<SetStateAction<boolean>>
}

export const QuestionCard = ({ question, showAnswer, onShowAnswer }: Props) => {
  return (
    <Card>
      <CardContent sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
        <Typography variant="body1">{question}</Typography>
      </CardContent>
      <CardActions
        sx={{ display: 'flex', justifyContent: 'center', mt: 1, mb: 2, gap: 2 }}
      >
        <Button size="small" color="warning" variant="contained">
          Previous question
        </Button>

        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={() => onShowAnswer((s: boolean) => !s)}
        >
          {showAnswer ? 'Hide' : 'Show'} answer
        </Button>
        <Button size="small" color="success" variant="contained">
          Next question
        </Button>
      </CardActions>
    </Card>
  )
}
