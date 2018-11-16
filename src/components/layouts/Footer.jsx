import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  appBar: `color: green;
           padding: 30px;
           
           `
}))

function Footer() {
  const classes = styles()
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.appBar} variant="h6">
          Footer
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
