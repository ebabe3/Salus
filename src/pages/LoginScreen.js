import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonTextInput from '../components/CommonTextInput';
import {COLOR} from '../style/color';
import Icon from 'react-native-vector-icons/Feather';

const Login = () => {
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 30,
          width: '100%',
          alignItems: 'center',
        }}>
        <View>
          <Icon
            style={{
              color: 'white',
              fontSize: 20,
              paddingRight: 20,
              paddingTop: 50,
            }}
            name="edit"
          />
          <CommonTextInput
            placeholderText="Deneme"
            inputWidth={'80%'}
            onChangeText={text => setPhone(text)}
          />
        </View>

        <CommonTextInput
          placeholderText="Deneme"
          inputWidth={'80%'}
          onChangeText={text => setPhone(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLOR.salusOrange,
  },
});

export default Login;
