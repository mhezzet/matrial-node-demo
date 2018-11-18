import React from 'react'
import { AppBar, Tab, Tabs } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({}))

export default function Footer({ muscles, onSelect, selectedMuscle }) {
  const classes = styles()
  const index = muscles
    ? muscles.findIndex(muscle => muscle === selectedMuscle) + 1
    : 0

  const onMuscleSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1])
  }
  return (
    <AppBar position="static" className={classes.root}>
      <Tabs centered onChange={onMuscleSelect} value={index}>
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} />
        ))}
      </Tabs>
    </AppBar>
  )
}
