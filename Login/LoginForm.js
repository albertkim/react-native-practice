import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator
} from 'react-native'
import { Container, Header, Content, Button, Icon, Title } from 'native-base'

export class LoginForm extends React.Component {

  login() {
    this.props.onLogin('authToken')
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={() => this.props.onBackButtonPress()}>
            <Icon name='ios-arrow-back' />
          </Button>
          
          <Title>Login</Title>
          
          <Button transparent>
            <Icon name='ios-menu' />
          </Button>
        </Header>
        <Content style={styles.container}>
          <Text style={styles.welcome}>
            Login
          </Text>
          <Text style={styles.instructions}>
            Please enter your credentials
          </Text>
          <TextInput placeholder='email' />
          <TextInput placeholder='password' />
          <Button block onPress={() => this.login()}>Login</Button>
        </Content>

      </Container>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
