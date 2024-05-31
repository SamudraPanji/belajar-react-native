import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View>
      <Text style={styles.text}>{number}</Text>
      <View style={styles.buttonWrapper}>
        <Button title="-" onPress={() => setNumber(number - 1)} />
        <Button title="+" onPress={() => setNumber(number + 1)} />
      </View>
    </View>
  );
};

const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.textTitle}>
        Materi Component dengan State Dinamis
      </Text>
      <Counter />
      <Counter />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
    marginTop: 30,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
