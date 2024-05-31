import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

const Communication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View>
      <Text style={styles.textTitle}>Communication</Text>
      <Product onPressButton={() => setTotalProduct(totalProduct + 1)} />
      <Cart quantity={totalProduct} />
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({
  textTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
  },
});
