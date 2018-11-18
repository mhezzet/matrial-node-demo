import React from 'react'
import { create } from 'jss'
import jssTemplate from 'jss-template'
import { jssPreset, StylesProvider } from '@material-ui/styles'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme1 } from './styles/themes'
import CssBaseline from '@material-ui/core/CssBaseline'

const jss = create({
  plugins: [jssTemplate(), ...jssPreset().plugins]
})

export default function Theme({ children }) {
  console.log(theme1)
  return (
    <MuiThemeProvider theme={theme1}>
      <CssBaseline />
      <StylesProvider jss={jss}>{children}</StylesProvider>
    </MuiThemeProvider>
  )
}
