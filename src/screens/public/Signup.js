import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/color/color';

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [email, SetEmail] = useState("you@example.com");
  const [password, SetPassword] = useState("your password");
  return (
    <LinearGradient colors={[colors.primary, colors.primaryDark]} style={styles.linearGradient}>
      <View style={styles.backContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/icon/Back.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/image/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.maintext}>Register With Us!</Text>
      <Text style={styles.maintext1}>Unlock your personal experience</Text>
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.titletext1}>First Name</Text>
          <TextInput
            style={styles.input1}
            onChangeText={setFirstName}
            value={firstName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titletext1}>Last Name</Text>
          <TextInput
            style={styles.input1}
            onChangeText={setLastName}
            value={lastName}
          />
        </View>
      </View>
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

      <TouchableOpacity style={styles.buttonText}>
        <Text style={styles.logintext}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.orcontainer}>
        <View style={styles.orline} />
        <Text style={styles.ortext}>OR</Text>
        <View style={styles.orline} />
      </View>
      <TouchableOpacity style={styles.guest}>
        <Image
          source={require('../../assets/icon/google.png')}
          style={styles.guesticon}
        />
        <Text style={styles.guesttext}>Continue with Google</Text>
        <View style={styles.vieww} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerContainer}
       onPress={() => navigation.navigate('Login')}
      >
      <Text style={styles.registerText}>
          Already have an account?{' '}
          <Text style={styles.registerLink}>Login</Text>
        </Text>
      </TouchableOpacity>

    </LinearGradient>
  )
}

export default SignUp;

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  backContainer: {
    marginTop: hp('5%'),
    marginLeft: wp('4%')
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    alignSelf:'center'
  },
  inputContainer: {
    width: wp('42.5%'), // Adjust the width as needed
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
    marginTop: hp('3%')
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
  maintext1: {
    textAlign: 'center',
    fontSize: 18,
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
  },
  input1: {
    width: wp('42%'),
    height: hp('6%'),
    borderColor: '#A5A5A5',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    fontSize: 14,
    color: '#A5A5A5'
  },
  titletext: {
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
    fontSize: 16,
    marginBottom: hp('1%'),
    color: '#B8B8B8'
  },
  titletext1: {
    marginTop: hp('2%'),

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
