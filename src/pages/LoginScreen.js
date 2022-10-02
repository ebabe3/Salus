import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CommonTextInput from '../components/CommonTextInput';
import {COLOR} from '../style/color';
import Icon from 'react-native-vector-icons/Feather';
import CommonButton from '../components/CommonButton';

const Login = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={{marginTop: 50}}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon
            style={{
              color: 'white',
              fontSize: 20,
              paddingRight: 20,
              paddingTop: 50,
            }}
            name="phone"
          />
          <Text style={styles.textPhone}>+90</Text>
          <CommonTextInput
            placeholderText="Cep Telefonunuz"
            inputWidth={'55%'}
            onChangeText={text => setPhone(text)}
          />
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon
            style={{
              color: 'white',
              fontSize: 20,
              paddingRight: 20,
              paddingTop: 50,
            }}
            name="unlock"
          />
          <CommonTextInput
            placeholderText="Şifrenizi Giriniz..."
            inputWidth={'65%'}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <CommonButton
            text="Giriş Yap"
            buttonColor={COLOR.salusOrange}
            buttonWidth={'100%'}
            buttonMarginTop={'5%'}
            onPress={() => {
              onSubmit(phone, password);
            }}
          />
          <TouchableOpacity style={{marginTop: 30, height: 20}}>
            <Text style={{color: 'white', fontSize: 15}}>
              Şifrenizi mi unuttunuz?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: '100%', width: '100%', alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 15}}>Hesabınız yoksa? </Text>
        <CommonButton
          text="Yeni Kayıt"
          buttonColor={COLOR.salusOrange}
          buttonWidth={'70%'}
          onPress={() => {
            navigation.navigate('Register');
          }}
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
  textPhone: {
    color: 'white',
    fontSize: 20,
    paddingTop: 50,
    paddingRight: 5,
  },
});

export default Login;
