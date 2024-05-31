import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const StylingComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={Styles.text}>Styling Component</Text>
      <View style={{padding: 12, backgroundColor: '#F2F2F2', width: 212}}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1399.jpg?t=st=1715163419~exp=1715167019~hmac=cc5ce9a05317960c78a58213d07c82f6d87c93f247d71c22b7a0af58fa6a3293&w=1800',
          }}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 12,
            color: 'orange',
          }}>
          Rp, 25.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jakarta Barat
        </Text>
        <View
          style={{
            backgroundColor: 'green',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            Beli Dong!
          </Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginLeft: 20,
    marginTop: 40,
  },
});

export default StylingComponent;
