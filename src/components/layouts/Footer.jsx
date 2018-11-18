import React from 'react'
import { AppBar, Tab, Tabs, withWidth } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({}))

function Footer({ muscles, onSelect, selectedMuscle, width }) {
  const classes = styles()
  const index = muscles
    ? muscles.findIndex(muscle => muscle === selectedMuscle) + 1
    : 0

  const onMuscleSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1])
  }
  return (
    <AppBar position="static" className={classes.root}>
      <Tabs
        onChange={onMuscleSelect}
        value={index}
        indicatorColor="secondary"
        textColor="secondary"
        scrollable={width === 'xs'}
        centered={width !== 'xs'}
      >
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} />
        ))}
      </Tabs>
    </AppBar>
  )
}

export default withWidth()(Footer)
