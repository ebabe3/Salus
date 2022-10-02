import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Alert, Text, TouchableOpacity} from 'react-native';
import Account from './src/pages/AccountScreen';
import HomeScreen from './src/pages/HomeScreen';
import Login from './src/pages/LoginScreen';
import Measurement from './src/pages/MeasurementScreen';
import Register from './src/pages/RegisterScreen';
import {COLOR} from './src/style/color';
import AddUser from './src/pages/AddUserScreen';

const Navigator = navigation => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: COLOR.salusOrange,
              headerBackTitleVisible: false,
            },
          }}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{
            headerBackTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: COLOR.salusOrange,
            },
          }}
        />
        <Stack.Screen
          name="Measurement"
          component={Measurement}
          options={{
            headerBackTitle: 'Geri',
            headerTintColor: 'white',
            headerRight: navigation => (
              <TouchableOpacity
                onPress={() =>
                  Alert.alert('Kullanıcı sayfasına yönlendirilecektir...')
                }>
                <Text style={{color: 'white', fontSize: 18}}>Kayıtlar</Text>
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: COLOR.salusOrange,
            },
          }}
        />
        <Stack.Screen
          name="AddUser"
          component={AddUser}
          options={{
            headerBackTitle: 'Geri',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: COLOR.salusOrange,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
