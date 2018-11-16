import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { jssPreset, StylesProvider } from '@material-ui/styles'
import { create } from 'jss'
import jssTemplate from 'jss-template'
import { theme1 } from './styles/themes'

const jss = create({
  plugins: [jssTemplate(), ...jssPreset().plugins]
})

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme1}>
      <StylesProvider jss={jss}>{children}</StylesProvider>
    </ThemeProvider>
  )
}
