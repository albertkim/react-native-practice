import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Button} from 'native-base'

export class Counter extends React.Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.upperSection}>
          <Button block>Add</Button>
          <Button block>Logout</Button>
          <Button block>Logout</Button>
          <Button block>Logout</Button>
        </View>

        <View style={styles.lowerSection}>
          <Text>Charge $18.99</Text>
          <Button block>Charge</Button>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },
  upperSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1
  },
  lowerSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    borderWidth: 1
  }
})
