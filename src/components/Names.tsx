import { Box, Typography } from '@mui/material'
import { useGetNames } from '../api-consumers/names/useGetNames'

const Names = (): JSX.Element => {
  const { data } = useGetNames()

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Names
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {data?.map((name) => {
          const fullName = `${name.first} ${name.last}`
          return (
            <Box
              sx={{
                m: 3,
              }}
              key={fullName}
            >
              {fullName}
            </Box>
          )
        })}
      </Box>
    </>
  )
}

export default Names
