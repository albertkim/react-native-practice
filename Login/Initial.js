import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Navigator
} from 'react-native'
import {Container, Header, Content, Button} from 'native-base'

export class Initial extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Homi
          </Text>
          <Text>
            Login to get started
          </Text>
          <Button block style={styles.button} onPress={() => this.props.onButtonPress()}>Login</Button>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})
