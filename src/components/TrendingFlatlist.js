// src/components/TrendingFlatList.js
import React from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const data = [
  {
    id: '1',
    image: require('../assets/image/trend.png'), // Update with your image path
    description: 'Honor breaks through in 2024, emerging as a top contender against competition',
  },
  {
    id: '2',
    image: require('../assets/image/card.png'), // Update with your image path
    description: 'Honor breaks through in 2024, emerging as a top contender against competition',
  },
  // Add more items as needed
];

const TrendingFlatList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <ImageBackground source={item.image} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.icons}>
            <View style={styles.dateContainer}>
              <Image
                source={require('../assets/icon/calendar.png')}
                style={styles.icon}
              />
              <Text style={styles.date}>23-JUL</Text>
            </View>
            <Text style={styles.guestText}>Saudi Gazet</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    alignItems: 'center',
  },
  itemContainer: {
    margin: 10,
    borderRadius: 25,
    overflow: 'hidden',
  },
  imageBackground: {
    width: wp('57%'),
    height: hp('27%'),
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: '#FFFFFFDB',
    width: wp('55%'),
    alignSelf: 'center',
    height: hp('9%'),
    borderRadius: 10,
    marginBottom: hp('2%'),
    padding: hp('1%'),
  },
  description: {
    color: '#000',
    fontSize: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  guestText: {
    fontSize: 8,
    color: '#00000099',
  },
  date: {
    fontSize: 10,
    color: '#00000080',
    marginLeft: wp('1%'),
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default TrendingFlatList;
