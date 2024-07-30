// components/Post.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import colors from '../assets/color/color';
import LinearGradient from 'react-native-linear-gradient';

const { height } = Dimensions.get('window');

const Post = ({ image, title, description ,topic ,date , guest}) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground source={{ uri: image }} style={styles.image}>
        <LinearGradient
            colors={['rgba(147, 147, 147, 0.1)', '#000000']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.gradient}
          >
          <View style={styles.overlay}>
          <View style={styles.header}>
          <Text style={styles.title1}>{topic}</Text>
          </View>

            <Text style={styles.title}>{title}</Text>
            <View style={styles.dateContainer}>
            <Text style={styles.datetitle}>{guest}</Text>
            <Text style={styles.datetitle}>{date}</Text>
            </View>
          </View>
          </LinearGradient>
        </ImageBackground>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    height,
    backgroundColor: 'white',
  },
  imageContainer: {
    height: hp('40%'),

  },
  header:{
       width:wp('24%'),
       backgroundColor:colors.primary,
       height:hp('4%'),
       justifyContent:'center',
       alignItems:'center',borderRadius:25
  },
  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    height: '100%',
  },
  overlay: {
    paddingLeft:wp('5%'),
    height: '100%',
    justifyContent: 'flex-end',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginTop:hp('1%')
  },
  title1: {
    color: '#fff',
    fontSize: 18,
  },
  datetitle:{
      color: '#fff',
    fontSize: 12,
    marginRight:wp('2%'),
    fontFamily:'normal',
    fontWeight:'100'
  },
  descriptionContainer: {
    height:hp('60%'),
    padding: 20,
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
    marginTop:-hp('4%'),
    backgroundColor:'#fff'
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
  dateContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginBottom:hp('5%')
  }
});

export default Post;
