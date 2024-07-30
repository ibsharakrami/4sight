import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/color/color'

const SplashScreen = () => {
  return (
    <LinearGradient colors={[colors.primary, colors.primaryDark]} style={styles.linearGradient}>
     <Image source={require('../../assets/image/logos.png')}/>
     <Text style={styles.text}>Your Gateway to Quick News.</Text>
     <ActivityIndicator size="large" color={colors.primary}  />
    </LinearGradient>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20,
    color:'#FFFFFFB2',
    marginTop:-hp('2%'),
  }
})
