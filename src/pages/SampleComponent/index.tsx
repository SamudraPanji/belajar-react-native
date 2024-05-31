import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';

const Photo = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/watercolor-terracotta-pattern-design_52683-90115.jpg?w=1800&t=st=1715159680~exp=1715160280~hmac=1110d9fdb4619dcc525739d656e3cc3a7c299778892ebabafce7399a735fdfe9',
        }}
        style={{width: 100, height: 100}}
      />
    </View>
  );
};

class BoxGreen extends Component {
  render() {
    return (
      <View>
        <Text>Ini Component class react</Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/watercolor-terracotta-background_23-2149563394.jpg?t=st=1715157612~exp=1715158212~hmac=977a203f94bf2ce9a22249e3218e4ebdfe6d85f3711266a5001345c548f6908d',
        }}
        style={{width: 250, height: 250}}
      />
    );
  }
}

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}}>
        <Text>Contoh Kotak</Text>
      </View>
      <Text>Hello World</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

export default SampleComponent;
