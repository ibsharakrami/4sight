// src/components/NewsList.js
import React, { useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet, ScrollView } from 'react-native';
import CategoryButton from './CategoryButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const data = {
  All: [
    {
      id: '1',
      image: require('../assets/image/image1.png'),
      description: 'Minister Al-Khateeb meets investors in Jeddah to boost investments in tourism sector',
      date: '23-JUL',
      guest: 'Guest 1',
    },
    {
      id: '2',
      image: require('../assets/image/image2.png'),
      description: 'SAMI expands strategic partnerships with Lockheed Martin and Airbus Helicopters',
      date: '22-JUL',
      guest: 'Guest 2',
    },
    {
      id: '3',
      image: require('../assets/image/image1.png'),
      description: 'Minister Al-Khateeb meets investors in Jeddah to boost investments in tourism sector',
      date: '22-JUL',
      guest: 'Guest 2',
    },
    {
      id: '4',
      image: require('../assets/image/image2.png'),
      description: 'Minister Al-Khateeb meets investors in Jeddah to boost investments in tourism sector',
      date: '22-JUL',
      guest: 'Guest 2',
    },
    // Add more items as needed
  ],
  Sport: [
    {
      id: '2',
      image: require('../assets/image/image1.png'),
      description: 'Minister Al-Khateeb meets investors in Jeddah to boost investments in tourism sector',
      date: '22-JUL',
      guest: 'Guest 2',
    },
    // Add more items as needed
  ],
  Politics: [
    {
      id: '3',
      image: require('../assets/image/image2.png'),
      description: 'Minister Al-Khateeb meets investors in Jeddah to boost investments in tourism sector',
      date: '21-JUL',
      guest: 'Guest 3',
    },
    // Add more items as needed
  ],
  Technology: [
    {
      id: '4',
      image: require('../assets/image/image1.png'),
      description: 'SAMI expands strategic partnerships with Lockheed Martin and Airbus Helicopters',
      date: '20-JUL',
      guest: 'Guest 4',
    },
    // Add more items as needed
  ],
  Travel: [
    {
      id: '5',
      image: require('../assets/image/image2.png'),
      description: 'SAMI expands strategic partnerships with Lockheed Martin and Airbus Helicopters',
      date: '19-JUL',
      guest: 'Guest 5',
    },
    // Add more items as needed
  ],
};

const NewsList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sport', 'Politics', 'Technology', 'Travel'];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.metaContainer}>
        <View style={styles.dateContainer}>
        <Image source={require('../assets/icon/calendar.png')}/>
        <Text style={styles.date}>{item.date}</Text>

        </View>
          <Text style={styles.guest}>{item.guest}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.buttonContainer}>
        {categories.map(category => (
          <CategoryButton
            key={category}
            title={category}
            isSelected={selectedCategory === category}
            onPress={() => setSelectedCategory(category)}
          />
        ))}
      </ScrollView>
      <FlatList
        data={data[selectedCategory]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10
    // padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    // marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    // borderRadius: 5,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  description: {
    fontSize: 12,
    marginBottom: 5,
    color:'#000'
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginLeft:wp('1%')
  },
  guest: {
    fontSize: 12,
    color: '#888',
  },
  dateContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  }
});

export default NewsList;
