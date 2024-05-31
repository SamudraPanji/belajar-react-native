import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginHorizontal: 20}}>
      <Image source={{uri: props.image}} style={styles.image} />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text style={styles.text}>PropsDinamis</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            image="https://source.unsplash.com/random/"
            title="Youtube Channel"
          />
          <Story
            image="https://source.unsplash.com/random/?city,night"
            title="Test"
          />
          <Story
            image="https://source.unsplash.com/random/?person,smile"
            title="Test 2"
          />
          <Story
            image="https://source.unsplash.com/random/?summer,sky"
            title="Test 3"
          />
          <Story
            image="https://source.unsplash.com/random/?winter,japan"
            title="Test 4"
          />
          <Story
            image="https://source.unsplash.com/random/?computer,tech"
            title="Test 5"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  text: {fontSize: 12},
  image: {width: 80, height: 80, borderRadius: 50},
});
