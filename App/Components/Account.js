import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, ActivityIndicator, Image, ScrollView, Switch, Alert, TouchableOpacity } from 'react-native'
import { List } from 'react-native-paper';
import { getDoc, setDoc, getFirestore, doc } from "firebase/firestore";
import { auth } from './firebase-config';
import { WebView } from 'react-native-webview';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import axios from "axios";
import qs from 'qs';

const db = getFirestore();

var tmp;

export default function Account(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [sign, setSign] = useState("in");
  const [code, setCode] = useState("ko");
  const [uid, setUid] = useState("in");
  const [name, setName] = useState("");
  const [img, setImg] = useState("https://ekoiki.fr/wp-content/uploads/2021/04/home-01.png");
  const [token, setToken] = useState("");

  const alertsfIn = () =>
    Alert.alert(
      "Area",
      `Failed to login. 😢`,
      [{ text: "OK" }]
    );

  const alertssIn = () =>
    Alert.alert(
      "Area",
      `Logged in successfully welcome ${email} 😍.`,
      [{ text: "OK" }]
    );

  const alertssUp = () =>
    Alert.alert(
      "Area",
      "Account succesfully created !",
      [{ text: "OK" }]
    );

  const alertsfUp = () =>
    Alert.alert(
      "Area",
      "Failed to signUp. 😢",
      [{ text: "OK" }]
    );

  const alertssOut = () =>
    Alert.alert(
      "Area",
      "Logout successfully !",
      [{ text: "OK" }]
    );

  const out = async () => {
    alertssOut()
    setSign("in");
    setEmail("");
    setPassword("")
    setName("")
    setImg("https://ekoiki.fr/wp-content/uploads/2021/04/home-01.png")
    setToken("")
    global.gg = "ko"
  }

  const getInf = async (uid) => {
    axios.get("http://10.41.159.146:8080/Area/" + uid)
  }

  const sUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      alertssUp()
      setSign("connected");
      global.uid = res.user.uid
      global.gg = "ko"
      await setDoc(doc(db, "Users", res.user.uid), {area: []});
      getInf(res.user.uid)
    } catch (err) {
      alertsfUp()
    }
  }

  const sIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      alertssIn()
      setSign("connected");
      global.uid = res.user.uid
      global.gg = "ko"
      getInf(res.user.uid)
    } catch {
      alertsfIn()
    }
  }

  const getToken = async (code) => {
    await fetch("https://oauth2.googleapis.com/token?client_id=427354900946-g2rrmevo58lr0l6p94jh2srr8s14dut4.apps.googleusercontent.com&client_secret=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&code=" + code + "&grant_type=authorization_code&redirect_uri=http://localhost:19000", {
      method:'POST'
     })
    .then(res => res.json())
    .then(json => {
      setToken(json.access_token)
      getName(json.access_token);
      axios.get("http://10.41.159.146:8080/Token/" + json.access_token)
    });
  };

  const getName = async (token) => {
    await fetch("https://www.googleapis.com/oauth2/v1/userinfo?access_token=" + token + "", {
      method:'GET'
     })
    .then(res => res.json())
    .then(json => {
      setName(json.email)
      setImg(json.picture)
      axios.get("http://10.41.159.146:8080/Email/" + json.email)
    });
  }

  const webViewChange = newNavState => {
    const { url } = newNavState;
    var regex = /[?&]([^=#]+)=([^&#]*)/g, params = {}, match;
    while (match = regex.exec(url)) {
      params[match[1]] = match[2];
    }
    if (params.code) {
      setCode(params.code)
      setSign("connected")
      getToken(params.code);
      global.gg = "ok"
    }
  };

  const g = () => {
   if (name == "") {
     return (
       <TouchableOpacity onPress={() => {setSign("web")}} style={styles.buttonSS}>
         <Text style={{color: "rgb(184, 31, 31)"}}>Log in</Text>
       </TouchableOpacity>
     )
   } else {
    return <Text>Welcome {name}</Text>
   }
  };

  useEffect(() => {
    global.sign = sign
  }, [sign]);

  const pages = () => {
    if (sign === "in") {
      return (
        <View style={styles.logs}>
          <Text style={styles.text1}>Sign In</Text>
          <TextInput style={styles.input} placeholder="Email *" value={email} onChangeText={setEmail}/>
          <TextInput style={styles.input2} secureTextEntry={true} placeholder="Password *" value={password} onChangeText={setPassword}/>
          <TouchableOpacity onPress={sIn} style={styles.button}>
            <Text style={{color: "#fff"}}>SIGN IN</Text>
          </TouchableOpacity>
          <View style={styles.info}>
            <Text>Vous n’avez pas de compte ? </Text>
            <TouchableOpacity onPress={() => {setSign("up")}}><Text style={styles.signC}>Inscrivez-vous</Text></TouchableOpacity>
          </View>
        </View>
      );
    } else if (sign === "up") {
      return (
        <View style={styles.logs}>
          <Text style={styles.text1}>Sign Up</Text>
          <TextInput style={styles.input} placeholder="Email *" value={email} onChangeText={setEmail}/>
          <TextInput style={styles.input2} secureTextEntry={true} placeholder="Password *" value={password} onChangeText={setPassword}/>
          <TouchableOpacity onPress={sUp} style={styles.button}>
            <Text style={{color: "#fff"}}>SIGN UP</Text>
          </TouchableOpacity>
          <View style={styles.info}>
            <Text>Vous avez un compte ? </Text>
            <TouchableOpacity onPress={() => {setSign("in")}}><Text style={styles.signC}>Connectez-vous</Text></TouchableOpacity>
          </View>
        </View>
      );
    } else if (sign === "connected") {
      return (
        <>
          <View style={styles.yM}>
            <Text style={styles.yProfile}>YOUR PROFILE</Text>
            <Text style={styles.mDetail}>My Details</Text>
          </View>
          <View style={styles.topA}>
            <View style={styles.top}>
              <Image
                style={styles.logo}
                source={{
                  uri: img,
                }}
              />
              <Text style={styles.textI}>
                {email}
              </Text>
              <View>
                <View style={{alignItems: 'center'}}>
                  {g()}
                </View>
                <List.Accordion
                title="Actions"
                style={styles.li}>
                  <List.Item title="Timer : Sets a 30s Timer for a reaction."/>
                  <List.Item title="Meteo : When weather in Paris changes."/>
                  <List.Item title="Btc : When Bitcoin value (USD) changes."/>
                  <List.Item title="Eth : When Etherum value (USD) changes."/>
                  <List.Item title="Nasa : When NASA drops the day's picture."/>
                  <List.Item title="Covid : When Covid-19 confirmed cases in the world increases."/>
                  <List.Item title="Google : Activated if you change your profile picture."/>
                  <List.Item title="Google : Activated if you change your username."/>
                </List.Accordion>
              </View>
              <View style={{marginTop: 15, marginBottom: 15, fontSize: 13}}>
                <List.Accordion
                title="Reactions"
                style={styles.li}>
                <List.Item title="Btc : Sends Bitcoin value (USD) by SMS."/>
                <List.Item title="Eth : Sends Etherum value (USD) by SMS."/>
                <List.Item title="Joke : Sends a random joke by SMS."/>
                <List.Item title="Memes : Sends a random meme by Mail."/>
                <List.Item title="Nasa : Sends NASA daily picture by Mail."/>
                <List.Item title="Meteo : Sends Paris' temperature by Mail."/>
                <List.Item title="Btc : Sends Bitcoin value (USD) by Mail."/>
                <List.Item title="Eth : Sends Etherum value (USD) by Mail."/>
                <List.Item title="Joke : Sends a random joke by Mail."/>
                </List.Accordion>
              </View>
            </View>
            <TouchableOpacity onPress={out} style={styles.buttons}>
              <Text style={{color: "#fff"}}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    }
  }

  if (sign === "web") {
    return (
      <WebView
        style={styles.webview}
        userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15"
        source={{uri: 'https://accounts.google.com/o/oauth2/v2/auth?client_id=427354900946-g2rrmevo58lr0l6p94jh2srr8s14dut4.apps.googleusercontent.com&redirect_uri=http://localhost:19000&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email&access_type=offline&prompt=consent'}}
        onNavigationStateChange={webViewChange}
      />
    )
  } else {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.text}>
              Account
          </Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            {pages()}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  webview: {
      flex: 1,
      marginTop: '20%',
      backgroundColor: '#fff',
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
  li: {
    width: 330,
    backgroundColor: "#fcfcfc",
  },
  text: {
    marginTop: 37,
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#252527',
  },
  text1: {
    fontSize: 22,
    marginTop: 37,
    color: '#252527',
  },
  yM: {
    alignItems: "flex-start",
    flex: 1,
    marginTop: 30,
    marginLeft: 40
  },
  yProfile: {
    fontSize: 20,
    color: '#1D2D51',
    fontWeight: 'bold',
  },
  mDetail: {
    fontSize: 17,
    color: '#9ba9cc',
  },
  input: {
    height: 40,
    width: 250,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#918c8c',
  },
  input2: {
    height: 40,
    width: 250,
    marginTop: 15,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#918c8c',
  },
  logs: {
    flex: 1,
    alignItems: "center"
  },
  info: {
    flex: 1,
    flexDirection: "row",
    color: "#3287b8",
    marginBottom: 15,
  },
  topA: {
    alignItems: 'center',
    marginTop: 15,
  },
  top: {
    width: "90%",
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "#f8f8f8",
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  logo: {
    width: 200,
    marginTop: 25,
    height: 200,
    borderRadius: 150,
    borderWidth: 1,
    borderColor: "#555"
  },
  signC: {
    color: "#326ed5",
  },
  textT: {
    marginTop: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#252527',
  },
  textI: {
    fontSize: 18,
    marginTop: 15,
    color: '#252527',
    marginBottom: 15
  },
  button: {
    width: 250,
    height: 30,
    backgroundColor: '#326ed5',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "#777",
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
  buttonSS: {
    width: 75,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    marginBottom: 10,
    borderColor: "rgb(184, 31, 31)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    width: 100,
    height: 30,
    backgroundColor: '#326ed5',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    borderColor: "#777",
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
})
