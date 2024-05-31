import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';

const ItemData = ({name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: `https://i.pravatar.cc/150?u=${name}`,
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalApi = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bidang, setBidang] = useState('');
  const [users, setUsers] = useState([]);
  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  const submit = () => {
    const data = {
      name,
      email,
      bidang,
    };

    if (button === 'Simpan') {
      Axios.post('http://10.0.2.2:3000/users', data)
        .then(response => {
          console.log(JSON.stringify(response.data));
          setName('');
          setEmail('');
          setBidang('');
          getData();
        })
        .catch(error => {
          console.log(error);
        });
    } else if (button === 'Update') {
      Axios.put(`http://10.0.2.2:3000/users/${selectedUser.id}`, data)
        .then(res => {
          console.log('res update: ', res);
          setName('');
          setEmail('');
          setBidang('');
          getData();
          setButton('Simpan');
        })
        .catch(err => console.log(err));
    }
  };

  const getData = () => {
    Axios.get('http://10.0.2.2:3000/users')
      .then(res => {
        console.log('res: ', res);
        setUsers(res.data);
      })
      .catch(err => console.log('error: ', err));
  };

  const selectItem = item => {
    console.log('selected item: ', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setBidang(item.bidang);
    setButton('Update');
  };

  const deleteItem = item => {
    Axios.delete(`http://10.0.2.2:3000/users/${item.id}`)
      .then(res => {
        console.log('res delete: ', res);
        getData();
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Local Api (JSON Server)</Text>
      <Text style={{marginBottom: 10, marginTop: 10}}>
        Masukkan anggota Samudra Camp
      </Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        placeholder="Bidang"
        style={styles.input}
        value={bidang}
        onChangeText={value => setBidang(value)}
      />
      <Button title={button} onPress={submit} />
      <View style={styles.line} />
      {Array.isArray(users) &&
        users.map(user => {
          return (
            <ItemData
              key={user.id}
              name={user.name}
              email={user.email}
              bidang={user.bidang}
              onPress={() => selectItem(user)}
              onDelete={() =>
                Alert.alert(
                  'Peringatan',
                  'Anda yakin akan menghapus data ini?',
                  [
                    {text: 'Tidak'},
                    {text: 'Ya', onPress: () => deleteItem(user)},
                  ],
                )
              }
            />
          );
        })}
    </View>
  );
};

export default LocalApi;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  avatar: {width: 80, height: 80, borderRadius: 80 / 2},
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  desc: {marginLeft: 18, justifyContent: 'center', flex: 1},
  descName: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descBidang: {fontSize: 12, marginTop: 8},
  delete: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginLeft: 'auto',
    justifyContent: 'center',
  },
});
