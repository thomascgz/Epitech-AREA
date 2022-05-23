import React from 'react';
import { StyleSheet, View, TextInput, Text, FlatList, Image, Pressable } from 'react-native'
import Account from '../Components/Account'
import Home from '../Components/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function nav(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="rgb(13, 73, 117)"
      inactiveColor="#000"
      barStyle={{ backgroundColor: '#fff' }}>
        <Tab.Screen name="Home" component={Home} initialParams={{d: "d"}} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="Account" component={Account} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 27,
    height: 27
  },
})
