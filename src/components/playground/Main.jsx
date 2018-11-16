import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const styles = theme => ({
  paper: { padding: 10, margin: 20 }
})
class Main extends Component {
  render() {
    const { classes } = this.props

    return (
      <Grid container spacing={16}>
        <LeftPane style={classes} />
        <RightPane style={classes} />
      </Grid>
    )
  }
}

export default withStyles(styles)(Main)
