import React, { useState } from 'react';
import Nav from './Components/Navigation'
import { StyleSheet, View, TextInput, Text, FlatList, ActivityIndicator, Button, Image, Pressable, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.main}>
      <Nav/>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
