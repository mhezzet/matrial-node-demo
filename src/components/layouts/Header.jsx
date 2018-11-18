import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../exercises/Dialog'
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles({
  Toolbar: {
    flexGrow: 1
  }
})

export default function Header({ muscles, onCreate }) {
  const classes = styles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.Toolbar}>
          New App
        </Typography>
        <CreateDialog muscles={muscles} onCreate={onCreate} />
      </Toolbar>
    </AppBar>
  )
}
