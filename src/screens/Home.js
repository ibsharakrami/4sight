import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TrendingFlatList from '../components/TrendingFlatlist';
import NewsList from '../components/NewsList';

const Home = ({navigation}) => {
  return (
    <ScrollView style={{flex:1 ,backgroundColor:'#fff'}}>
       <View style={styles.headercontainer}>
       <Text style={styles.headername}>Hi, Guest!</Text>
       <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
        >
          <Image
            source={require('../assets/icon/bell.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
       </View>
      <Text style={styles.title}>What you {'\n'}intrested today</Text>
      <Text style={styles.Ttitle}>Trending </Text>
      <TrendingFlatList />
      <Text style={styles.Etitle}>Explore </Text>
      <NewsList />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  headercontainer:{
    height:hp('6%'),
    // backgroundColor:'red',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:wp('6%'),
    marginTop:hp('5%')
  },headername:{
    fontSize:21,
    color:'#00000082',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },title:{
    fontSize:21,
    color:'#000000',
    marginLeft:wp('6%'),
  },
  Ttitle:{
    fontSize:20,
    color:'#000000',
    marginLeft:wp('6%'),
    marginTop:hp('2%'),
    fontWeight:'100'
  },
  Etitle:{
    fontSize:20,
    color:'#000000',
    marginLeft:wp('6%'),
    fontWeight:'100',
    marginBottom:hp('1%')
  },
})
