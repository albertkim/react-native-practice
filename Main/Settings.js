import * as React from 'react'
import {View} from 'react-native'
import {Button} from 'native-base'

export class Settings extends React.Component {

  render() {
    return (
      <View>
        <Button onPress={() => this.props.logout()}>Logout</Button>
      </View>
    )
  }

}
