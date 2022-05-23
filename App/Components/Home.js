import React, { useState, useEffect } from 'react'
import { StyleSheet, Picker, View, TextInput, FlatList, RefreshControl, ActivityIndicator, Pressable, TouchableOpacity, ScrollView, Image, Switch } from 'react-native'
import { Modal, Portal, Text, Button, Provider, IconButton, Colors } from 'react-native-paper';
import { setDoc, getFirestore, doc, getDoc } from "firebase/firestore";
import axios from "axios";
import Area from './Area'

const db = getFirestore();
var tmp;

export default function Home(props) {
  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState("Timer - 30s");
  const [reaction, setReaction] = useState("Btc - Sms");
  const [refresh, setRefresh] = useState(0)
  const [area, setArea] = useState([])

  const hideModal = () => {
    setVisible(false);
    setAction("Timer - 30s");
    setReaction("Btc - Sms");
  }

  const okModal = () => {
    setVisible(false);
    setArea([...area, {action: action, reaction: reaction, isActive: false}]);
    setAction("Timer - 30s");
    setReaction("Btc - Sms");
  }

  const checkArea = async () => {
    const ref = doc(db, "Users", global.uid);
    const docSnap = await getDoc(ref);
    tmp = docSnap.data();
    setArea(tmp.area);
  }

  const aRea = async () => {
    try {
      await setDoc(doc(db, "Users", global.uid), {area: area});
    } catch (err) {
      console.log(err);
    }
  }

  const onRefresh = () => {
    setRefresh(true);
    setTimeout(setRefresh, 500, false);
    checkArea()
  }

  useEffect(() => {
    if (area.length !== 0)
      aRea();
  }, [area]);

  const hub = () => {
    if (visible === true && global.gg == "ko") {
      return (
        <View style={styles.modaal}>
          <Text style={{fontSize: 20, margin: 10, marginBottom: 20}}>Add an AREA</Text>
          <View style={styles.area1}>
            <View style={{alignItems: "center"}}>
              <Text style={{fontSize: 16, margin: 0, color: '#1D2D51', fontWeight: 'bold'}}>Action</Text>
            </View>
            <Picker selectedValue={action} onValueChange={itemValue => setAction(itemValue)}>
              <Picker.Item label="Timer - 30s" value="Timer - 30s" />
              <Picker.Item label="Meteo - Paris" value="Meteo - Paris" />
              <Picker.Item label="Btc - USD" value="Btc - USD" />
              <Picker.Item label="Eth - USD" value="Eth - USD" />
              <Picker.Item label="Nasa - Img of the day" value="Nasa - Img of the day" />
              <Picker.Item label="Covid - Nbr of cases" value="Covid - Nbr of cases" />
            </Picker>
          </View>
          <View style={styles.area2}>
            <View style={{alignItems: "center"}}>
              <Text style={{fontSize: 16, margin: 10, color: '#1D2D51', fontWeight: 'bold'}}>Reaction</Text>
            </View>
            <Picker selectedValue={reaction} onValueChange={itemValue => setReaction(itemValue)}>
              <Picker.Item label="Btc - Sms" value="Btc - Sms" />
              <Picker.Item label="Eth - Sms" value="Eth - Sms" />
              <Picker.Item label="Joke - Sms" value="Joke - Sms" />
            </Picker>
          </View>
          <View style={styles.butn}>
            <TouchableOpacity onPress={hideModal} style={styles.buttons}>
              <Text style={{color: "#3287b8"}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={okModal} style={styles.buttons}>
              <Text style={{color: "#3287b8"}}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else if (visible === true && global.gg == "ok") {
      return (
        <View style={styles.modaal}>
          <Text style={{fontSize: 20, margin: 10, marginBottom: 20}}>Add an AREA</Text>
          <View style={styles.area1}>
            <View style={{alignItems: "center"}}>
              <Text style={{fontSize: 16, margin: 0, color: '#1D2D51', fontWeight: 'bold'}}>Action</Text>
            </View>
            <Picker selectedValue={action} onValueChange={itemValue => setAction(itemValue)}>
              <Picker.Item label="Timer - 30s" value="Timer - 30s" />
              <Picker.Item label="Meteo - Paris" value="Meteo - Paris" />
              <Picker.Item label="Btc - USD" value="Btc - USD" />
              <Picker.Item label="Eth - USD" value="Eth - USD" />
              <Picker.Item label="Nasa - Img of the day" value="Nasa - Img of the day" />
              <Picker.Item label="Covid - Nbr of cases" value="Covid - Nbr of cases" />
              <Picker.Item label="Google - Profile picture" value="Google - Profile picture" />
              <Picker.Item label="Google - Username" value="Google - Username" />
            </Picker>
          </View>
          <View style={styles.area2}>
            <View style={{alignItems: "center"}}>
              <Text style={{fontSize: 16, margin: 10, color: '#1D2D51', fontWeight: 'bold'}}>Reaction</Text>
            </View>
            <Picker selectedValue={reaction} onValueChange={itemValue => setReaction(itemValue)}>
              <Picker.Item label="Btc - Sms" value="Btc - Sms" />
              <Picker.Item label="Eth - Sms" value="Eth - Sms" />
              <Picker.Item label="Joke - Sms" value="Joke - Sms" />
              <Picker.Item label="Memes - Mail" value="Memes - Mail" />
              <Picker.Item label="Nasa - Mail" value="Nasa - Mail" />
              <Picker.Item label="Btc - Mail" value="Btc - Mail" />
              <Picker.Item label="Eth - Mail" value="Eth - Mail" />
              <Picker.Item label="Joke - Mail" value="Joke - Mail" />
            </Picker>
          </View>
          <View style={styles.butn}>
            <TouchableOpacity onPress={hideModal} style={styles.buttons}>
              <Text style={{color: "#3287b8"}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={okModal} style={styles.buttons}>
              <Text style={{color: "#3287b8"}}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    } else {
      return (
        <View style={{marginTop: 20}}>
          <TouchableOpacity onPress={() => {setVisible(true)}} style={styles.button}>
            <Text style={{color: "#fff", fontSize: 20}}>+</Text>
          </TouchableOpacity>
          {area.map((item, index) => {
            return <Area key={index} item={item} area={area} setArea={setArea}/>
          })}
        </View>
      )
    }
  }

  if (global.sign !== "connected") {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.text}>
              Home
          </Text>
        </View>
        <View style={styles.body}>
          <ScrollView refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={onRefresh}
            />
          }>
            <TouchableOpacity style={styles.buttonG}>
              <Text style={{color: "#fff", fontSize: 20}}>+</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.text}>
              Home
          </Text>
        </View>
        <View style={styles.body}>
          <ScrollView refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh} />}>
            {hub()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 75,
    flex: 0.10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#bbb',
  },
  body: {
    flex: 0.90,
  },
  text: {
    marginTop: 37,
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#252527',
  },
  modaal :{
    paddingLeft: 20,
    paddingRight: 20,
    height: 600,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "#f8f8f8",
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  area1: {
    flex: 0.25,
    marginTop: 0,
  },
  area2: {
    flex: 0.25,
    marginTop: 185,
  },
  butn: {
    justifyContent: 'center',
    flexDirection: "row",
    marginTop: 200,
    flex: 0.5,
  },
  button: {
    width: 45,
    height: 45,
    backgroundColor: '#326ed5',
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#aaa",
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonG: {
    width: 45,
    height: 45,
    backgroundColor: '#aaa',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#aaa",
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttons: {
    width: 70,
    height: 35,
    backgroundColor: '#f8f8f8',
    marginLeft: 15,
    marginTop: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#f8f8f8",
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  pickerStyle: {
  },
})
