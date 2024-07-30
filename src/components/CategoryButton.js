// src/components/CategoryButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';

const CategoryButton = ({ title, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.selectedButton, styles.shadow]}
      onPress={onPress}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  selectedButton: {
    backgroundColor: '#007bff', // Change this to your desired color for selected state
  },
  text: {
    fontSize: 14,
    color: '#000',
  },
  selectedText: {
    color: '#ffffff', // Change this to your desired color for selected state
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});

export default CategoryButton;
