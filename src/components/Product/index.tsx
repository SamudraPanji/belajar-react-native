import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Product = props => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1399.jpg?t=st=1715163419~exp=1715167019~hmac=cc5ce9a05317960c78a58213d07c82f6d87c93f247d71c22b7a0af58fa6a3293&w=1800',
          }}
          style={styles.imageProduct}
        />
        <Text style={styles.titleProduct}>New Macbook Pro 2019</Text>
        <Text style={styles.priceProduct}>Rp, 25.000.000</Text>
        <Text style={styles.location}>Jakarta Barat</Text>
        <TouchableOpacity onPress={props.onPressButton}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonTitle}>Beli Dong!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {padding: 12, backgroundColor: '#F2F2F2', width: 212},
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  titleProduct: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  priceProduct: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12,
    color: 'orange',
  },
  location: {fontSize: 12, fontWeight: '300', marginTop: 12},
  buttonWrapper: {
    backgroundColor: 'green',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 20,
  },
});
