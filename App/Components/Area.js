import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Icon, Switch } from 'react-native-elements';

export default function Area(props) {
  const handleChange = () => {
    const tmp = [...props.area];
    if (props.item.isActive === true)
      props.item.isActive = false;
    else
      props.item.isActive = true;
    props.setArea(tmp);
  };

  return (
    <View style={styles.main}>
      <View style={styles.widget}>
        <View style={styles.logo}>
          <Icon color='#bdb2ff' name='api' size={40}/>
        </View>
        <View style={styles.switch}>
          <Switch onValueChange={handleChange} value={props.item.isActive}/>
        </View>
        <View style={styles.text}>
          <Text style={styles.textD}>{props.item.action} / {props.item.reaction}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    marginTop: 15,
  },
  logo: {
    alignItems: "flex-start",
    margin: 15,
  },
  switch: {
    alignItems: "flex-end",
    margin: 15,
  },
  text: {
    alignItems: "center",
    margin: 15,
  },
  textD: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 13,
  },
  widget: {
    flex: 1,
    height: 175,
    width: 300,
    backgroundColor: "rgba(39, 38, 64, 0.9)",
    borderRadius: 40,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "rgba(61,61,61,0.56)",
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
})
