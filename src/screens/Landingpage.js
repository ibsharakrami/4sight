import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/color/color';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Landingpage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={[colors.primary, colors.primaryDark]} style={styles.linearGradient}>

        {/* Top Half */}
        <View style={styles.topHalf}>
          <Image
            source={require('../assets/image/logo.png')}
            style={styles.logo}
          />
        </View>

        {/* Bottom Half */}
        <View style={styles.bottomHalf}>
          <Text style={styles.mainText}>
            More Than {'\n'}Just Headlines, your {'\n'}Shortcut to News.
          </Text>
          <Text style={styles.subText}>
            Your Fast-Track to Staying Informed{'\n'}
            Quick, Reliable News at Your Fingertips.
          </Text>
          <View style={styles.borderline}></View>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>ENTER THE 4SIGHT</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
            >
              <Image
                source={require('../assets/icon/front.png')}
                style={styles.icon}
              />

            </TouchableOpacity>

          </View>
        </View>

      </LinearGradient>
    </SafeAreaView>
  );
}

export default Landingpage;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  topHalf: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHalf: {
    flex: 1,
    marginHorizontal: hp('3%')
  },
  logo: {
    resizeMode: 'contain',
  },
  mainText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'left',
    color: '#fff',

  },
  subText: {
    color: '#ffffff', // Change this to your desired text color
    fontSize: 12,
    textAlign: 'left',
    marginTop: hp('2%'),
    marginBottom: hp('8%'),
    fontFamily: 'sans-serif'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('5%')
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  borderline: {
  width: wp('90%'),
   height: 2,
    backgroundColor: '#fff',
     alignSelf: 'center'
      }
});
