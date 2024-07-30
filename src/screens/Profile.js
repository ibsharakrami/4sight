import React, { useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity , Image, Modal, FlatList, Dimensions,Switch} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../assets/color/color';

const Profile = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [guestName, setGuestName] = useState('John Doe');
  const [language, setLanguage] = useState('English');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

 const toggleNotifications = () => setNotificationsEnabled((previousState) => !previousState);

  const languages = ['English', 'Arabic'];

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setIsModalVisible(false);
  };


  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View style={styles.loggedInContainer}>
          <Text style={styles.helloText}>Hello, {guestName}</Text>
          <Text style={styles.customizeText}>Welcome back!</Text>
          <Text style={styles.customizeText}>
            Customize your experience to make it even better.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setIsLoggedIn(false);
              // Handle logout functionality here
            }}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.loggedInContainer}>
          <Text style={styles.helloText1}>Unlock a Personalized Experience!</Text>
          <Text style={styles.customizeText}>
            Sign in to set your preferences and get started.
          </Text>
          <Text></Text>

          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              setIsLoggedIn(true);
              // Handle signup functionality here
            }}
          >
            <Text style={[styles.buttonText1]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.languageContainer}>
        <View style={styles.languageLeft}>
          <Image
            source={require('../assets/icon/translator.png')} // Update with your icon path
            style={styles.languageIcon}
          />
          <Text style={styles.languageTitle}>Language</Text>
        </View>
        <TouchableOpacity style={styles.languageRight} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.languageText}>{language}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.languageContainer}>
        <View style={styles.languageLeft}>
          <Image
            source={require('../assets/icon/bell.png')} // Update with your icon path
            style={styles.languageIcon1}
          />
          <Text style={styles.languageTitle}>Notification</Text>
        </View>
        <View style={styles.notificationRight}>
          <Switch
            value={notificationsEnabled}
            onValueChange={toggleNotifications}
            trackColor={{false: '#767577', true: '#767577'}}
        thumbColor={notificationsEnabled ? colors.primary : '#f4f3f4'}

          />
        </View>
      </View>
      <View style={styles.bordercontainer}>
      <Text style={styles.languageTitle1}>Share 4Sight</Text>
      </View>
      <View style={styles.bordercontainer}>
      <Text style={styles.languageTitle1}>Rate 4Sight</Text>
      </View>
      <View style={styles.bordercontainer}>
      <Text style={styles.languageTitle1}>Terms & Condition</Text>
      </View>
      <View style={styles.bordercontainer}>
      <Text style={styles.languageTitle1}>Privacy Policy</Text>
      </View>

      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={languages}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languageOption}
                  onPress={() => handleLanguageChange(item)}
                >
                  <Text style={styles.languageOptionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#fff'
  },
  loggedInContainer: {
    width:wp('90%'),
    height:hp('20%'),
    borderRadius:10,
    backgroundColor:colors.primary,
    marginTop:hp('4%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    marginBottom:hp('2%')
  },
  helloText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop:hp('2%'),
    marginLeft:wp('3%'),
    color:'#fff'
  },
  helloText1: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop:hp('2%'),
    marginLeft:wp('3%'),
    color:'#fff'
  },
  customizeText: {
    fontSize: 12,
    color:'#FFFFFFE5',
    marginLeft:wp('3%'),
  },
  button: {
    width:wp('85%'),
    alignSelf:'center',
    height:hp('5%'),
    borderColor:'#fff',
    borderWidth:1,
    borderRadius: 5,
    justifyContent:'center',
    marginTop:hp('3%')
  },
  button1: {
    width:wp('30%'),
    backgroundColor:'#fff',
    height:hp('5%'),
    justifyContent:'center',
    marginTop:hp('3%'),
    marginLeft:wp('3%'),
    borderRadius:5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign:'center'
  },
  buttonText1: {
    color: colors.primary,
    fontSize: 16,
    textAlign:'center'
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height:hp('6%'),
    borderColor:'#CFCFCF',
    borderBottomWidth:1

  },
  bordercontainer: {
    width: '100%',
    height:hp('6%'),
    borderColor:'#CFCFCF',
    borderBottomWidth:1,
    justifyContent:'center'

  },
  languageLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  languageIcon1: {
    width: 18,
    height: 22,
    marginRight: 12,
    marginLeft:5
  },
  notificationRight: {
    alignItems: 'flex-end',
    borderColor:'#000',
    borderRadius:25,
    borderWidth:1
  },
  languageTitle: {
    fontSize: 16,
    color:'#000'
  },
  languageTitle1: {
    fontSize: 16,
    color:'#000',
    marginLeft:wp('9%'),
    fontWeight:'100'
  },
  languageRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  languageText: {
    fontSize: 16,
    color: '#007bff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '80%',
    padding: 20,
  },
  languageOption: {
    padding: 10,
  },
  languageOptionText: {
    fontSize: 16,
    color:'#000'
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});
