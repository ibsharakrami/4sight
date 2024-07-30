import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/color/color';

const OtpVc = ({ navigation }) => {
  const [newpassword, SetNPassword] = useState("New password,");
  const [confirmpassword, SetCPassword] = useState("Confirm password")
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
      <Text style={styles.maintext}>Set Password</Text>
      <View>
        <Text style={styles.titletext}>New Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={SetNPassword}
          value={newpassword}
        />
      </View>
      <View>
        <Text style={styles.titletext}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={SetCPassword}
          value={confirmpassword}
        />
      </View>
      <TouchableOpacity style={styles.buttonText}>
        <Text style={styles.logintext}>Submit</Text>
      </TouchableOpacity>

    </LinearGradient>
  )
}

export default OtpVc;

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
  }

});
