import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../assets/color/color';

const OtpV = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  // Handler for changes in each input
  const handleChange = (index, value) => {
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus next input if value is entered and current index is not the last
      if (value !== '' && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  // Handle key press events to manage backspace correctly
  const handleKeyPress = (index, key) => {
    if (key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Handle text input focusing and blurring
  const handleBlur = (index) => {
    if (otp[index] === '') {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Render individual OTP input field
  const renderOtpInput = (index) => (
    <TextInput
      key={index}
      ref={(ref) => inputRefs.current[index] = ref}
      style={styles.input}
      value={otp[index]}
      onChangeText={(value) => handleChange(index, value)}
      onKeyPress={({ nativeEvent }) => handleKeyPress(index, nativeEvent.key)}
      keyboardType="numeric"
      maxLength={1}
      returnKeyType="next"
      onBlur={() => handleBlur(index)}
      onSubmitEditing={() => {
        if (index < otp.length - 1) {
          inputRefs.current[index + 1].focus();
        }
      }}
      blurOnSubmit={false}
    />
  );
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
      <Text style={styles.maintext}>OTP Verification</Text>
      <View style={styles.otpContainer}>
        {otp.map((_, index) => renderOtpInput(index))}
      </View>

      <TouchableOpacity style={styles.buttonText}
       onPress={() => navigation.navigate('Otpvc')}
      >
        <Text style={styles.logintext}>Verify</Text>
      </TouchableOpacity>

    </LinearGradient>
  )
}

export default OtpV;

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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:wp('80%'),
    alignSelf:'center',
    marginTop:hp('2%'),
    marginBottom:hp('2%')
  },
  input: {
    width: wp('15%'),
    height: hp('6%'),
    borderColor: '#A5A5A5',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  }, titletext: {
    marginTop: hp('2%'),
    marginLeft: wp('5%'),
    fontSize: 16,
    marginBottom: hp('1%'),
    color: '#B8B8B8'
  },

});
