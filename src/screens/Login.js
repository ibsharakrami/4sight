import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/color/color';

const Login = ({ navigation }) => {
  const [email, SetEmail] = useState("you@example.com");
  const [password, SetPassword] = useState("your password")
  return (
    <LinearGradient colors={[colors.primary, colors.primaryDark]} style={styles.linearGradient}>
      <View style={styles.backContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Landingpage')}
        >
          <Image
            source={require('../assets/icon/Back.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/image/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.maintext}>Welcome Back!{'\n'}
        Your Gateway to Quick News</Text>
      <View>
        <Text style={styles.titletext}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={SetEmail}
          value={email}
        />
      </View>
      <View>
        <Text style={styles.titletext}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={SetPassword}
          value={password}
        />
      </View>
      <TouchableOpacity
         onPress={() => navigation.navigate('Forgetpassword')}
      >
      <Text style={styles.forget}>Forget Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonText}>
        <Text style={styles.logintext}>Login</Text>
      </TouchableOpacity>
      <View style={styles.orcontainer}>
        <View style={styles.orline} />
        <Text style={styles.ortext}>OR</Text>
        <View style={styles.orline} />
      </View>
      <TouchableOpacity style={styles.guest}>
        <Image
          source={require('../assets/icon/google.png')}
          style={styles.guesticon}
        />
        <Text style={styles.guesttext}>Continue with Google</Text>
        <View style={styles.vieww} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.guest}>
        <Image
          source={require('../assets/icon/guest.png')}
          style={styles.guesticon}
        />
        <Text style={styles.guesttext}>Continue as a Guest</Text>
        <View style={styles.vieww} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerContainer}
         onPress={() => navigation.navigate('Signup')}
      >
      <Text style={styles.registerText}>
          Don't have an account?{' '}
          <Text style={styles.registerLink}>Register</Text>
        </Text>
      </TouchableOpacity>

    </LinearGradient>
  )
}

export default Login;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  backContainer: {
    marginTop: hp('5%'),
    marginLeft: wp('4%')
  },
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  forget:{
color:'#fff',
textAlign:'right',
marginRight:wp('5%'),
marginTop:hp('1%')
  },
  buttonText: {
    margin: 10,
    backgroundColor: '#fff',
    width: wp('60%'),
    height: hp('6%'),
    borderColor: '#A5A5A5',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp('1%')
  },
  logintext: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
    color: '#000'
  },
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height:hp('20%')
  },
  maintext: {
    textAlign: 'center',
    fontSize: 22,
    color: '#fff'
  },
  input: {
    width: wp('90%'),
    height: hp('6%'),
    borderColor: '#A5A5A5',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    fontSize: 14,
    color: '#A5A5A5'
  }, titletext: {
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
    fontSize: 16,
    marginBottom: hp('1%'),
    color: '#B8B8B8'
  }, orline: {
    height: 2,
    width: wp('35%'),
    backgroundColor: '#FFFFFF2E'
  }, orcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp('2%'),
    width: wp('90%'),
    alignSelf: 'center',
    marginTop: hp('1%')
  }, ortext: {
    color: '#FFFFFF80'
  }, guest: {
    width: wp('90%'),
    height: hp('6%'),
    borderColor: '#A5A5A5',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }, vieww: {
    width: wp('7%')
  }, guesttext: {
    color: '#FFFFFF80',
    fontSize: 14
  },
  guesticon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: wp('2%')
  },
  registerContainer:{
    alignItems:'center',
    marginTop:hp('2%')
  },
  registerText: {
    fontSize: 16,
    color: '#fff',
  },
  registerLink: {
    color: colors.primary,
  },

});
