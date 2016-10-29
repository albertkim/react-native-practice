import * as React from 'react'
import {StyleSheet, View, Text, ScrollView} from 'react-native'
import {ProductListElementView} from './ProductListElementView'

const product1 = {
  name: 'Product1',
  basePrice: 10000
}

export class Inventory extends React.Component {

  render() {
    return (
      <ScrollView>
        <ProductListElementView product={product1} />
        <ProductListElementView product={product1} />
        <ProductListElementView product={product1} />
        <ProductListElementView product={product1} />
        <ProductListElementView product={product1} />
        <ProductListElementView product={product1} />
        <ProductListElementView product={product1} />
        <ProductListElementView product={product1} />
        <ProductListElementView product={product1} />
        <ProductListElementView product={product1} />
        <ProductListElementView product={product1} />
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({

})
