import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator
} from 'react-native'
import {Container, Header, Content, Button} from 'native-base'
import Tabs from 'react-native-tabs'
import {Counter} from './Counter'
import {Settings} from './Settings'

export class Main extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      page: 'counter'
    }
  }

  getContents() {
    if (this.state.page === 'settings') {
      return <Settings logout={() => this.props.logout()} />
    } else if (this.state.page === 'counter') {
      return <Counter />
    } else {
      return (
        <View>
          <Text style={styles.welcome}>
            Welcome to React Native
          </Text>
          <Text style={styles.instructions}>
              Selected page: {this.state.page}
          </Text>
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
          <Text name='counter'>Counter</Text>
          <Text name='second' selectedIconStyle={{borderTopWidth:2, borderTopColor:'red'}}>Second</Text>
          <Text name='fourth' selectedStyle={{color:'green'}}>Fourth</Text>
          <Text name='settings' onSelect={() => this.setState({page: 'settings'})}>Settings</Text>
        </Tabs>
        {this.getContents()}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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