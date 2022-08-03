import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Question = () => {
  const { query } = useRouter()
  console.log(query, 'query')

  return (
    <>
      <div>question nr {query?.questionId}</div>
    </>
  )
}

export default Question
