import React, { Component, Fragment } from 'react'
import { Header, Footer } from './layouts'
import Main from './playground/Main'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    )
  }
}

export default App
