import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const data = [
  {
    id: '1',
    image: require('../assets/image/image1.png'), // Update with your image path
    title: 'John Doe',
    description: 'Hey, how are you?',
    time: '10:45 AM',
  },
  {
    id: '2',
    image: require('../assets/image/image2.png'), // Update with your image path
    title: 'Jane Smith',
    description: 'Are we still on for tomorrow?',
    time: '09:30 AM',
  },
  {
    id: '3',
    image: require('../assets/image/image1.png'), // Update with your image path
    title: 'John Doe',
    description: 'Hey, how are you?',
    time: '10:45 AM',
  },
  {
    id: '4',
    image: require('../assets/image/image2.png'), // Update with your image path
    title: 'Jane Smith',
    description: 'Are we still on for tomorrow?',
    time: '09:30 AM',
  },

  // Add more items as needed
];

const NotificationItem = ({ item }) => (
  <View style={styles.notificationItem}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  </View>
);
const Notification = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
 <FlatList
    data={data}
    renderItem={({ item }) => <NotificationItem item={item} />}
    keyExtractor={item => item.id}
    contentContainerStyle={styles.flatListContent}
  />
  </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  flatListContent: {
    padding: 10,

  },
  notificationItem: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '300',
    color:'#000'
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  time: {
    fontSize: 12,
    color: '#aaa',
  },
});
