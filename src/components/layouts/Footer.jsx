import React from 'react'
import { AppBar, Tab, Tabs, withWidth } from '@material-ui/core'

function Footer({ muscles, onSelect, selectedMuscle, width }) {
  const index = muscles
    ? muscles.findIndex(muscle => muscle === selectedMuscle) + 1
    : 0

  const onMuscleSelect = (e, index) => {
    onSelect(index === 0 ? '' : muscles[index - 1])
  }
  return (
    <AppBar position="static">
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
