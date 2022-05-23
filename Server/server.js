const express = require('express');
const axios = require('axios');
const bodyParser = require("body-parser");
const ip = require("ip");
const BlaguesAPI = require('blagues-api');
const Twitter = require("twitter");
const nodemailer = require("nodemailer");
const about = require("./about.json")
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, getDoc, doc } = require('firebase-admin/firestore');

const app = express();

const serviceAccount = require('./key.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

var area = [];

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080, function() {
  console.log('listening on 8080')
  setInterval(aRea, 10000);
})

app.get('/about.json', async (req,res) => {
  about.client.host = ip.address()
  about.server.current_time = Math.floor(Date.now() / 1000)
  res.status(200).json(about);
})

app.get('/client.apk', async (req,res) => {
  const file = "./apk/area.apk";
  res.download(file);
  res.status(200).json(file);
})

var btc = "";

var eth = "";

var weather = "";

var twitter = "";

var nasa = "";

var covid = "";

var pp = "";

var username = "";

var obj;

var nasas;

var weathers;

var val;

var vals;

var uid;

var token;

var optbtc = {
  "headers": {'X-CoinAPI-Key': '2B605653-93E8-4E18-8AF2-D46D0A84AE68'}
};

var mail;

const blagues = new BlaguesAPI('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMzE3NDM0MjQ0NDYyODA0OTkzIiwibGltaXQiOjEwMCwia2V5IjoiMnVSZ093bHA3dlFkTWFKODBkWm13N2pWTWJkWEY1cDN1Tm1zbUR3bUdqd1NoT09yNTgiLCJjcmVhdGVkX2F0IjoiMjAyMi0wMi0yOFQxNTo0MDozNiswMDowMCIsImlhdCI6MTY0NjA2MjgzNn0.W6ys9LysXOY2WnuL71WdH5BOwYwddgvmxSf7x3yN2gg');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'riadsofiane936@gmail.com',
      pass: 'Riyadsofiane93',
    },
});

const aRea = async () => {
  const snp = await db.collection('Users').get();
  snp.forEach((doc) => {
    if (doc.id === uid) {
      area = doc.data().area;
    }
  });
  area.map(item => {
    if (item.isActive === true)
      hubA(item.action, item.reaction)
  });
}

app.get('/Area/:id', async (req, res) => {
  uid = req.params.id;
  res.status(200).json("ok");
})

app.get('/Token/:id', async (req, res) => {
  token = req.params.id;
  res.status(200).json("ok");
})

app.get('/Email/:id', async (req, res) => {
  mail = req.params.id;
  res.status(200).json("ok");
})

//------------------------------------Action----------------------------------\\

const hubA = async (action, reaction) => {
  if (action === "Timer - 30s") {
    hubR(action, reaction);
  } else if (action === "Meteo - Paris") {
    await axios.get('http://api.weatherstack.com/current', { params: { access_key: '52c54afe935e659f05b46baaaf17d67e',  query: "Paris"} }).then(resp => {
      if (weather === "") {
        weather = resp.data.current.temperature;
        hubR(action, reaction);
      } else if (resp.data.current.temperature !== weather) {
        hubR(action, reaction);
        weather = resp.data.current.temperature
      }
    })
  } else if (action === "Btc - USD") {
    await axios.get('https://rest.coinapi.io/v1/exchangerate/BTC/USD', optbtc).then(resp => {
      if (btc === "") {
        btc = resp.data.rate;
        hubR(action, reaction);
      } else if (resp.data.rate !== btc) {
        hubR(action, reaction);
        btc = resp.data.rate
      }
    })
  } else if (action === "Eth - USD") {
    await axios.get('https://rest.coinapi.io/v1/exchangerate/ETH/USD', optbtc).then(resp => {
      if (eth === "") {
        eth = resp.data.rate;
        hubR(action, reaction);
      } else if (resp.data.rate !== eth) {
        hubR(action, reaction);
        eth = resp.data.rate
      }
    })
  } else if (action === "Nasa - Img of the day") {
    await axios.get('https://api.nasa.gov/planetary/apod?api_key=Dcu6lm2vrHufpOo4e86oRPzHMNNVSRTUQAEjMaHe').then(resp => {
      if (nasa === "") {
        nasa = resp.data.hdurl;
        hubR(action, reaction);
      } else if (resp.data.hdurl !== nasa) {
        hubR(action, reaction);
        nasa = resp.data.hdurl
      }
    })
  } else if (action === "Covid - Nbr of cases") {
    await axios.get('https://api.covid19api.com/live/country/france/status/confirmed').then(resp => {
      if (covid === "") {
        covid = resp.data[0].Confirmed;
        hubR(action, reaction);
      } else if (resp.data[0].Confirmed !== covid) {
        hubR(action, reaction);
        covid = resp.data[0].Confirmed
      }
    })
  } else if (action === "Google - Profile picture") {
    await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', { headers: { Authorization: 'Bearer ' + token, Accept: 'application/json'}}).then(resp => {
      if (pp === "") {
        pp = resp.data.picture;
        hubR(action, reaction);
      } else if (resp.data.picture !== pp) {
        hubR(action, reaction);
        pp = resp.data.picture
      }
    })
  } else if (action === "Google - Username") {
    await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', { headers: { Authorization: 'Bearer ' + token, Accept: 'application/json'}}).then(resp => {
      if (username === "") {
        username = resp.data.name;
        hubR(action, reaction);
      } else if (resp.data.name !== username) {
        hubR(action, reaction);
        username = resp.data.name
      }
    })
  }
}

//---------------------------------Reaction-----------------------------------\\

const hubR = async (action, reaction) => {
  console.log(action + " => " + reaction)
  if (reaction === "Memes - Mail") {
    await axios.get('https://api.imgflip.com/get_memes').then(resp => {
      obj = resp.data.data.memes[getRandomInt(0, 100)].url;
    })
    var info = {
       attachments: [{
        filename: 'memeoftheday.jpg',
        href: obj
       }],
       from: 'riadsofiane936@gmail.com',
       to: mail,
       subject: "Your memes picture is here",
     };
    transporter.sendMail(info, function(err, info) {
      if (err){
        console.log(err);
      }
    })
  } else if (reaction === "Nasa - Mail") {
    await axios.get('https://api.nasa.gov/planetary/apod?api_key=Dcu6lm2vrHufpOo4e86oRPzHMNNVSRTUQAEjMaHe').then(resp => {
      nasas = resp.data.hdurl;
    })
    var info = {
       attachments: [{
        filename: 'nasapictureoftheday.jpg',
        href: nasas
       }],
       from: 'riadsofiane936@gmail.com',
       to: mail,
       subject: "Your daily Nasa picture is here",
     };
    transporter.sendMail(info, function(err, info) {
      if (err){
        console.log(err);
      }
    })
  } else if (reaction === "Joke - Mail") {
    const blague = await blagues.random()
    var str1 = blague.joke
    var str2 = str1.concat(' ')
    var str = str2.concat(blague.answer)
    var info = {
       from: 'riadsofiane936@gmail.com',
       to: mail,
       subject: "The best joke ever",
       text: str
     };
    transporter.sendMail(info, function(err, info) {
      if (err) {
        console.log(err);
      }
    })
  } else if (reaction === "Meteo - Mail") {
    await axios.get('http://api.weatherstack.com/current', { params: { access_key: '52c54afe935e659f05b46baaaf17d67e',  query: "Paris"} }).then(resp => {
      weathers = resp.data.current.temperature;
    })
    var info = {
       attachments: [{
        filename: 'City.gif',
        href: "https://media.giphy.com/media/8P1oO2JbrZK2uSYnL6/giphy.gif"
       }],
       from: 'riadsofiane936@gmail.com',
       to: mail,
       subject: "Actual temperature in Paris",
       text: "In Paris the temperature is " + weathers
     };
    transporter.sendMail(info, function(err, info) {
      if (err){
        console.log(err);
      }
    })
  } else if (reaction === "Btc - Mail") {
    await axios.get('https://rest.coinapi.io/v1/exchangerate/BTC/USD', optbtc).then(resp => {
      val = resp.data.rate
    })
    var info = {
       from: 'riadsofiane936@gmail.com',
       to: mail,
       subject: "Btc Crypto",
       text: "BTC value in $: " + val
     };
    transporter.sendMail(info, function(err, info) {
      if (err){
        console.log(err);
      }
    })
  } else if (reaction === "Eth - Mail") {
    await axios.get('https://rest.coinapi.io/v1/exchangerate/ETH/USD', optbtc).then(resp => {
      vals = resp.data.rate
    })
    var info = {
       from: 'riadsofiane936@gmail.com',
       to: mail,
       subject: "Eth Crypto",
       text: "ETH value in $: " + vals
     };
    transporter.sendMail(info, function(err, info) {
      if (err){
        console.log(err);
      }
    })
  } else if (reaction === "Btc - Sms") {
    await axios.get('https://rest.coinapi.io/v1/exchangerate/BTC/USD', optbtc).then(resp => {
      val = resp.data.rate
    })
    await axios.post('https://smsapi.free-mobile.fr/sendmsg?user=11981597&pass=6BFfDtJmPOQwTZ&msg=BTC%20value%20in%20$%20:%20' + encodeURI(val)).then(resp => {})
  } else if (reaction === "Eth - Sms") {
    await axios.get('https://rest.coinapi.io/v1/exchangerate/Eth/USD', optbtc).then(resp => {
      vals = resp.data.rate
    })
    await axios.post('https://smsapi.free-mobile.fr/sendmsg?user=11981597&pass=6BFfDtJmPOQwTZ&msg=ETH%20value%20in%20$%20:%20' + encodeURI(vals)).then(resp => {})
  } else if (reaction === "Joke - Sms") {
    const blague = await blagues.random()
    var str1 = blague.joke
    var str2 = str1.concat(' ')
    var str = str2.concat(blague.answer)
    await axios.post('https://smsapi.free-mobile.fr/sendmsg?user=11981597&pass=6BFfDtJmPOQwTZ&msg=' + encodeURI(str)).then(resp => {})
  }
}
