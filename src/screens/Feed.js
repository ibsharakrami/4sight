// components/Feed.js
import React from 'react';
import { FlatList, StyleSheet, Dimensions, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Post from '../components/Post';

const { height } = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    image: 'https://s.yimg.com/fz/api/res/1.2/n21Rz8RpT8qKdKsQCaIOOw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cT04MDtzbT0xO3c9NTEy/https://media.zenfs.com/en/hotel_management_network_805/39fff802ce17b46c9d8da3fe4060e273',
    title: 'Minister Al-Khateeb meets investors in Jeddah to boost investments in tourism sector',
    description: 'Minister of Tourism Ahmed Al-Khateeb met with investors and business owners to explore tourism opportunities in Jeddah and Taif. Joined by Princess Haifa Al Saud and Mohammed Naghi, the meeting highlighted the Ministrys support mechanisms, including the investment enablers program. Discussions showcased current projects and emphasized Saudi Arabias commitment to enhancing its global tourism standing.',
    topic : "Affairs",
    guest : "ahmed",
     date :"23 jun"
  },
  {
    id: '2',
    image: 'https://s.yimg.com/fz/api/res/1.2/t30PdiXe0TUWd7LQWZRIyA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD05MjtweG9mZj0wO3B5b2ZmPTA7cT04MDt3PTE2NA--/https://s.yimg.com/am/60d/06658669165408037528ef73be33e9e3',
    title: 'Minister Al-Khateeb meets investors in Jeddah to boost investments in tourism sector',
    description: 'Minister of Tourism Ahmed Al-Khateeb met with investors and business owners to explore tourism opportunities in Jeddah and Taif. Joined by Princess Haifa Al Saud and Mohammed Naghi, the meeting highlighted the Ministrys support mechanisms, including the investment enablers program. Discussions showcased current projects and emphasized Saudi Arabias commitment to enhancing its global tourism standing.',
     topic : "Affairs",
     guest : "ibshar ahmed",
     date :"24 jun"
  },
  // Add more posts as needed
];

const Feed = () => {
  const navigation = useNavigation();

  const handleNavigate = (item) => {
    navigation.navigate('Original', { postId: item.id, postData: item });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Post {...item} />
            <TouchableOpacity
              style={styles.postButton}
              onPress={() => handleNavigate(item)}
            >
              <Text style={styles.postButtonText}>Read more</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={height}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  postContainer: {
    height:hp('99%'),
    // justifyContent: 'space-between',
    // padding: 20,
  },
  postButton: {
    width:wp('30%'),
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 25,
    alignSelf:'flex-end'

  },
  postButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Feed;

