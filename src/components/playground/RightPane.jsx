import React from 'react'
import { Grid, Paper } from '@material-ui/core'

export default function LeftPane({ style }) {
  return (
    <Grid sm>
      <Paper className={style.paper}>Second item</Paper>
    </Grid>
  )
}
