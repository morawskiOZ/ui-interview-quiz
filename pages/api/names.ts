// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { wait } from '../../src/helpers/wait'

export interface Name {
  first: string
  last: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Name[]>
) {
  await wait(4000)
  res.status(200).json([
    { first: 'John', last: 'Doe' },
    { first: 'Jane', last: 'Doe' },
    { first: 'Jack', last: 'Doe' },
  ])
}
