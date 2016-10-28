import React from 'react'
import { Navigator, Text, TouchableHighlight } from 'react-native'
import { Container, Header, Content, Button } from 'native-base'
import { Initial } from './Initial'
import { LoginForm } from './LoginForm'

export class Login extends React.Component {

  render() {
    const routes = [
      {name: 'Initial'},
      {name: 'LoginForm'},
    ]
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          if (route.name === 'Initial') {
            return <Initial onButtonPress={() => navigator.push({name: 'LoginForm'})} />
          } else if (route.name === 'LoginForm') {
            return <LoginForm onBackButtonPress={() => navigator.pop()} onLogin={authToken => this.props.onLogin(authToken)} />
          } else {
            return null
          }
        }}
      />
    )
  }

}
