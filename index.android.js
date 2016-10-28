/**
 * @flow
 */

// If hotloading is not working, enable through the rage menu: ctrl + m

import * as React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import {Login} from './Login'
import {Main} from './Main'

export class Homi extends React.Component {

  constructor() {
    super()
    this.state = {
      authToken: undefined
    }
  }

  render() {
    if (!this.state.authToken) {
      return <Login onLogin={authToken => this.setState({authToken: authToken})} />
    } else {
      return <Main logout={() => this.setState({authToken: undefined})} />
    }
  }

}

AppRegistry.registerComponent('Homi', () => Homi)
