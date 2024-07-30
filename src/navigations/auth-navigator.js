import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Landingpage from '../screens/Landingpage';
import Login from '../screens/Login';
import SignUp from '../screens/public/Signup';
import ForgetPassword from '../screens/public/ForgetPassword';
import OtpV from '../screens/public/OtpV';
import OtpVc from '../screens/public/OtpVc';


const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Landingpage">

      <Stack.Screen
        name="Landingpage"
        component={Landingpage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Signup"
        component={SignUp}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Forgetpassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Otpv"
        component={OtpV}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Otpvc"
        component={OtpVc}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
export default AuthNavigator;
