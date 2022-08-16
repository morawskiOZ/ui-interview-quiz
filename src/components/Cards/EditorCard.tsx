import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import '@uiw/react-md-editor/dist/mdeditor.min.css'
import '@uiw/react-markdown-preview/dist/markdown.min.css'
import dynamic from 'next/dynamic'
import React from 'react'
import { Card } from '../@Shared/Card'
interface Props {}

const MDEditor = dynamic<any>(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
)
const EditorMarkdown = dynamic<any>(
  () =>
    import('@uiw/react-md-editor').then((mod) => {
      return mod.default.Markdown
    }),
  { ssr: false }
)
const Markdown = dynamic<any>(
  () => import('@uiw/react-markdown-preview').then((mod) => mod.default),
  { ssr: false }
)

export const EditorCard = () => {
  const [value, setValue] = React.useState<string | undefined>(
    '**Use this markdown editor as notepad!!!**'
  )
  return (
    <Card>
      <CardContent>
        <MDEditor value={value} onChange={setValue} />
      </CardContent>
    </Card>
  )
}
