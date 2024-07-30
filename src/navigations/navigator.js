
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import AppNavigator from './app-navigator'
import AuthNavigator from './auth-navigator'
import { Text } from 'react-native'
import SplashScreen from '../screens/public/SplashScreen';

const Stack = createStackNavigator();

const AppRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulate a splash screen delay
    setTimeout(() => {
      // Replace this with your login check logic
      const loggedInStatus = true; // Example: replace with actual login status
      setIsLoggedIn(loggedInStatus);
      setIsLoading(false);
    }, 2000); // 5 seconds delay
  }, []);

  if (isLoading) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      {/* <AppNavigator /> */}
      {/* <AuthNavigator /> */}
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}

    </NavigationContainer>
  )
}

export default AppRoute
