import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoute from './src/navigations/navigator';


const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
       <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />

        <AppRoute />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff', // Change this to your desired background color
  },
});

export default App;
