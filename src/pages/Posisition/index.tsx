import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import cart from '../../assets/icons/cart.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Materi Position</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  title: {fontSize: 30, fontWeight: '800', marginBottom: 12, marginTop: 20},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 20,
    fontWeight: '900',
    fontSize: 15,
  },
  iconCart: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '800', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
