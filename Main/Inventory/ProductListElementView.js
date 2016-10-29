import * as React from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'

export class ProductListElementView extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30}}>{this.props.product.name || 'No name provided'}</Text>
        <Text>Price: ${this.props.product.basePrice ? this.props.product.basePrice/100 : '-'}</Text>
      </View>
    )
  }

}

ProductListElementView.prototypes = {
  product: React.PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
