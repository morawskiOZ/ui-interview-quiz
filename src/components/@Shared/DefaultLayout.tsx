import { Header } from './Header'

export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
