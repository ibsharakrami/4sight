import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Notification from '../screens/Notification';

import BottomNavigator from './bottom-navigator';
import { Image, Text, TouchableOpacity } from 'react-native';
import OriginalNews from '../screens/OriginalNews';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
     <Stack.Screen
  name="Notification"
  component={Notification}
  options={({ navigation }) => ({
    headerTitleAlign: 'center',
    headerLeft: () => null, // Remove the default back button
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()} // You can change this to your desired functionality
        style={{ marginRight: 20 }}
      >
        <Image source={require('../assets/icon/letter.png')}/>
      </TouchableOpacity>
    ),
  })}
/>
<Stack.Screen
  name="Original"
  component={OriginalNews}
  options={({ navigation }) => ({
    headerTitleAlign: 'center',
    headerLeft: () => null, // Remove the default back button
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()} // You can change this to your desired functionality
        style={{ marginRight: 20 }}
      >
        <Image source={require('../assets/icon/letter.png')}/>
      </TouchableOpacity>
    ),
  })}
/>
    </Stack.Navigator>
  );
}
export default AppNavigator;
