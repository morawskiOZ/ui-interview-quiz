import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AnswerCard } from '../../../src/components/Cards/AnswerCard'
import { EditorCard } from '../../../src/components/Cards/EditorCard'
import { QuestionCard } from '../../../src/components/Cards/QuestionCard'

const Question = () => {
  const [showAnswer, setShowAnswer] = useState(false)
  const { query } = useRouter()

  return (
    <>
      <QuestionCard
        showAnswer={showAnswer}
        question="What is the difference between a class and a function component?"
        onShowAnswer={setShowAnswer}
      />
      {showAnswer && <AnswerCard question="Class components are worse" />}
      <EditorCard />
    </>
  )
}

export default Question
