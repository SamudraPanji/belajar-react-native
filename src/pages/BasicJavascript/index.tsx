import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BasicJavascript = () => {
  const name = 'Samudra Panji Nugroho';
  let age = 27;

  const pet = {
    name: 'Miaw',
    kind: 'Kucing',
    age: 2,
    isLocal: true,
    color: 'Kuning',
    parent: {
      male: 'Kaisar',
      female: 'Kuin',
    },
  };

  const sapaOrang = (name, age) => {
    return `Hello ${name}, usia anda ${age} tahun`;
  };

  const namaOrang = [
    'Samudra',
    'Panji',
    'Nugroho',
    'Ian',
    'Oktafian',
    'Purnomosidi',
    'Dimas',
    'Kenzo',
  ];

  const sapaHewan = objectPet => {
    let result = '';
    if (objectPet.kind === 'Kucing') {
      result = 'Hallo Miaw, apa kabar?';
    } else {
      result = 'Halo, hewan siapa ini ';
    }
    return result;
  };

  const helloPet = objectPet => {
    return objectPet.kind === 'Kucing'
      ? 'Hallo Miaw, apa kabar?'
      : 'Halo, hewan siapa ini ';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>BasicJavascript</Text>
      <Text style={styles.textTitle}>Name: {name}</Text>
      <Text style={styles.textTitle}>Age: {age}</Text>
      <Text style={styles.textTitle}>Pet Name: {pet.name}</Text>
      <Text style={styles.textTitle}>{sapaOrang(name, age)}</Text>
      <Text style={styles.textTitle}>{sapaHewan(pet)}</Text>
      <Text style={styles.textTitle}>{helloPet(pet)}</Text>
      <Text style={styles.textTitle}>hallo {namaOrang[0]}!</Text>
      {namaOrang.map((orang, index) => (
        <Text key={index}>
          {index + 1}. {orang}
        </Text>
      ))}
    </View>
  );
};

export default BasicJavascript;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textTitle: {
    textAlign: 'center',
  },
});
