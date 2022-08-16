import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { QuestionIcon } from '../QuestionIcon'
import { Button } from '@mui/material'

interface Props {
  window?: () => Window
  children?: React.ReactElement
}

function ElevationScroll(props: Props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children as any, {
    elevation: trigger ? 4 : 0,
  })
}

export const Header = (props: Props) => {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            background:
              'linear-gradient(90deg, #48ded4 0%, #a026bf 20%, #e82c75 60%, #FFC40E 85%, #48ded4 95%)',
            // backgroundColor: "#c8b7a6"
          }}
        >
          <Toolbar>
            <QuestionIcon />
            <Typography
              variant="h6"
              component="div"
              sx={{ ml: 1, flexGrow: 1 }}
            >
              Dev Quiz
            </Typography>
            <Button
              size="small"
              color="inherit"
              variant="outlined"
              sx={{ flexGrow: 0 }}
            >
              Add question
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  )
}
