import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class FlexBox extends Component {
  render() {
    return (
      <View>
        <Text>Materi Flex Box</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{backgroundColor: '#ee5253', flex: 1, height: 50}} />
          <View style={{backgroundColor: '#feca57', flex: 1, height: 50}} />
          <View style={{backgroundColor: '#1dd1a1', flex: 1, height: 50}} />
          <View style={{backgroundColor: '#5f27cd', flex: 1, height: 50}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 15,
          }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/99332394?v=4',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 15,
              marginLeft: 10,
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Samudra Panji Nugroho
            </Text>
            <Text>100 Ribu Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
