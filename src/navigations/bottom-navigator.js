import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Feed from '../screens/Feed';
import Profile from '../screens/Profile';
import { Image, Text, View } from 'react-native';
import colors from '../assets/color/color';

const Tab = createBottomTabNavigator();

const BottomNavigator = () =>  {
  return (
    <Tab.Navigator

    >
      <Tab.Screen name="Home" component={Home} options={{
         headerShown: false,
         tabBarIcon : ({focused}) =>{
          <View style={{alignItems:'center',justifyContent:'center'}}>
                 <Image
                 source={require('../assets/icon/explore.png')}
                 resizeMode='contain'
                 style={{
                  width:25,
                  height:25,
                  tintColor : focused ? colors.primary : colors.primaryDark,
                  backgroundColor:'red'
                 }}
                 />
                 <Text style={{color: focused ? colors.primary : colors.primaryDark ,fontSize : 12}}>
                      Home
                 </Text>
          </View>
         }

         }}/>
      <Tab.Screen name="Feed" component={Feed} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}
export default BottomNavigator
