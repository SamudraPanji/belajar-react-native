import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';

const CallAPIVanilla = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {
    // Call API dengan Method GET
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => console.log(json));

    // Call API dengan Method POST
    // const dataForAPI = {
    //   name: 'morpheus',
    //   job: 'leader',
    // };
    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then(response => response.json())
    //   .then(json => console.log(json));
  }, []);

  const getData = () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    fetch(`https://reqres.in/api/users/${randomNumber}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then(response => response.json())
      .then(json => {
        console.log('POST response: ', json);
        setDataJob(json);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call API dengan Vanilla JS</Text>
      <Button title="GET Data" onPress={getData} />
      <Text>Response GET Data</Text>
      <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST Data" onPress={postData} />
      <Text>Response POST Data</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
      <View style={styles.line} />
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', fontSize: 20, fontWeight: 'bold'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 50},
});
