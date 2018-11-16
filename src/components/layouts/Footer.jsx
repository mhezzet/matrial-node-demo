import React, { Component } from 'react'
import { AppBar, Tab, Tabs } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})
class Footer extends Component {
  state = {
    selected: 0
  }

  handleChange = (event, value) => {
    this.setState({ selected: value })
  }
  render() {
    return (
      <AppBar position="static">
        <Tabs value={this.state.selected} onChange={this.handleChange} centered>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
    )
  }
}
export default withStyles(styles)(Footer)
