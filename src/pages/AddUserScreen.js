import React, {useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CommonTextInput from '../components/CommonTextInput';
import {COLOR} from '../style/color';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/FontAwesome5';
import CommonButton from '../components/CommonButton';

const AddUser = ({navigation}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gender, setGender] = useState('');
  const [bithday, setBirthday] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [smoke, setSmoke] = useState('');

  return (
    <View style={styles.container}>
      <View style={{marginTop: 50, alignItems: 'center'}}>
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
            name="user"
          />
          <CommonTextInput
            placeholderText="İsim"
            inputWidth={'65%'}
            onChangeText={text => setName(text)}
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
            name="users"
          />
          <CommonTextInput
            placeholderText="Soyisim"
            inputWidth={'65%'}
            onChangeText={text => setSurname(text)}
          />
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon2
            style={{
              color: 'white',
              fontSize: 20,
              paddingRight: 20,
              paddingTop: 50,
            }}
            name="transgender-alt"
          />
          <CommonTextInput
            placeholderText="Cinsiyet"
            inputWidth={'65%'}
            onChangeText={text => setGender(text)}
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
            name="calendar"
          />
          <CommonTextInput
            placeholderText="Doğum tarihi"
            inputWidth={'65%'}
            onChangeText={text => setBirthday(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingLeft: '12%',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon3
              style={{
                color: 'white',
                fontSize: 20,
                paddingRight: 20,
                paddingTop: 50,
              }}
              name="height"
            />
            <CommonTextInput
              placeholderText="Boyunuz"
              inputWidth={'35%'}
              onChangeText={text => setHeight(text)}
            />
            <Text style={{color: 'white'}}>cm</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon4
              style={{
                color: 'white',
                fontSize: 20,
                paddingRight: 20,
                paddingTop: 50,
              }}
              name="weight"
            />
            <CommonTextInput
              placeholderText="Kilonuz"
              inputWidth={'35%'}
              onChangeText={text => setWeight(text)}
            />
            <Text style={{color: 'white'}}>kg</Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Icon4
            style={{
              color: 'white',
              fontSize: 20,
              paddingRight: 20,
              paddingTop: 50,
            }}
            name="smoking"
          />
          <CommonTextInput
            placeholderText="Sigara içiyor musunuz?"
            inputWidth={'65%'}
            onChangeText={text => setSmoke(text)}
          />
        </View>
        <CommonButton
          text="Ekle"
          buttonColor={COLOR.salusOrange}
          buttonWidth={300}
          buttonMarginTop={'5%'}
          onPress={() => {
            Alert.alert('Yeni Kullanıcı Eklendi');
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

export default AddUser;
