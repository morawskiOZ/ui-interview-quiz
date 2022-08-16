import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Stack = () => {
  const { query, pathname, push } = useRouter()
  const defaultStack = 'frontend'
  const stack = query?.stack || defaultStack

  useEffect(() => {
    push({
      pathname: `${stack}/[questionId]`,
      query: { questionId: '1' },
    })
  }, [push, pathname, stack])

  return (
    <>
      <div>Let us find you a question</div>
    </>
  )
}

export default Stack
