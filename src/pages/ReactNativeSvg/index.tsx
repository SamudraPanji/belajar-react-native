import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomePage from '../../assets/svg/homepage.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi Menggunakan file SVG pada React Native
      </Text>
      <HomePage width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', fontSize: 20, fontWeight: 'bold'},
});
