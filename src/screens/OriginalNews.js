import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const OriginalNews = ({ navigation }) => {
  // const route = useRoute();
  // const { postId, postData } = route.params;

  return (
    <View style={{ flex: 1 }} >
        <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ height :hp('90%'),width:wp('100%')}} />
    </View>


  );

}

export default OriginalNews

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});
