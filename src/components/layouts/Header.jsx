import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../exercises/Dialog'

export default function Header({ muscles, onCreate }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
          New App
        </Typography>
        <CreateDialog muscles={muscles} onCreate={onCreate} />
      </Toolbar>
    </AppBar>
  )
}
