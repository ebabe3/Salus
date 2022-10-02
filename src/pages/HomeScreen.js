import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CommonButton from '../components/CommonButton';

const HomeScreen = ({navigation}) => {
  const DATA = [
    {
      title: 'Kullanıcılar',
      data: ['Kullanıcı Adı', 'Kullanıcı Adı', 'Kullanıcı Adı'],
    },
  ];

  const Item = ({title}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Measurement')}>
      <View
        style={{
          backgroundColor: '#FF9633',
          height: 40,
          width: 40,
          borderRadius: 50,
        }}></View>
      <View style={{paddingLeft: 5}}>
        <Text style={styles.itemText}>{title}</Text>
        <Text style={{fontSize: 15, color: 'grey'}}>Ölçüm Sayısı</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.profile}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#FF9633',
            marginTop: 30,
            borderRadius: 50,
          }}></View>
        <Text style={{color: 'black', fontSize: 18}}>Kullanıcı Adı</Text>
        <Text style={{color: '#FF9633', fontSize: 12}}>Kullanıcı Rolü</Text>
        <View
          style={{
            width: '100%',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 30,
              paddingRight: 30,
            }}>
            <CommonButton
              text="Hesap"
              buttonBorderColor="#FF9633"
              buttonWidth={'35%'}
              textColor="#FF9633"
              onPress={() => {
                Alert.alert('Profil sayfasına yönlendirilecektir...');
              }}
            />
            <CommonButton
              text="Kullanıcı Ekle"
              buttonBorderColor="#FF9633"
              textColor="#FF9633"
              buttonWidth={'35%'}
              onPress={() => {
                navigation.navigate('AddUser');
              }}
            />
          </View>
        </View>
      </View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.header}>
            <Text style={{color: 'white'}}>{title}</Text>
          </View>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  profile: {
    alignItems: 'center',
    width: '100%',
    height: '30%',
  },
  header: {
    alignItems: 'center',
    width: '100%',
    height: 35,
    marginTop: '12%',
    backgroundColor: '#FF9633',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 0.19,
    flexDirection: 'row',
  },

  title: {
    fontSize: 24,
  },
  itemText: {
    fontSize: 15,
  },
});

export default HomeScreen;
