import React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleIcon from '@mui/icons-material/Google';
import './App.css';

const auth = getAuth();

const provider = new GoogleAuthProvider();

export default function Profile(props) {
  const logOut = async () => {
    alert(`Logout successfully`);
    props.setArea([]);
    props.setSigns("in");
    props.setInfo({});
    props.setToken("")
    props.setName("")
    props.setImg("rien")
  };

  const google = async (res) => {
    signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res)
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const secret = credential.secret;
      props.setToken(credential.accessToken)
      props.setName(res.user.email)
      props.setImg(res.user.photoURL)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
 };

  const g = () => {
   if (props.name == "") {
     return (
       <Button
         color='error'
         variant="outlined"
         startIcon={<GoogleIcon/>}
         sx={{ mb: 2, width: 100, textTransform: 'none', borderRadius: 10}}
         onClick={() => {google()}}
       >Log in</Button>
     )
   } else {
    return <p>Welcome {props.name}</p>
   }
  };

  return (
    <div className="center">
      <div>
        <div className="detailsProfile">
          <h4 className="yProfile">YOUR PROFILE</h4>
          <h5>My Details</h5>
        </div>
        <div className="profile">
          <Avatar
            src={props.img}
            sx={{ width: 100, height: 100 }}
          />
          <div>
            <p>{props.info.name}</p>
            <p>{props.info.email}</p>
          </div>
        </div>
        <div className="profile1">
          <center><div>
            {g()}
          </div></center>
          <Accordion sx={{width: 500, marginTop: 1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><h4><u>Actions</u></h4></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p><b>Timer :</b> Sets a 30s Timer for a reaction.</p>
              <p><b>Meteo :</b> Activated if the temperature in Paris changes.</p>
              <p><b>Btc :</b> Activated if the Bitcoin value (USD) changes.</p>
              <p><b>Eth :</b> Activated if the Etherum value (USD) changes.</p>
              <p><b>Nasa :</b> Activated if NASA drops the day's picture.</p>
              <p><b>Covid :</b> Activated if Covid-19 confirmed cases changes.</p>
              <p className="pG"><b>Google :</b> Activated if you change your profile picture.</p>
              <p className="pG"><b>Google :</b> Activated if you change your username.</p>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{width: 500, marginTop: 2}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography><h4><u>Reactions</u></h4></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <p><b>Btc :</b> Sends the Bitcoin value (USD) by SMS.</p>
              <p><b>Eth :</b> Sends the Etherum value (USD) by SMS.</p>
              <p><b>Joke :</b> Sends a random joke by SMS.</p>
              <p className="pG"><b>Memes :</b> Sends a random meme by Mail.</p>
              <p className="pG"><b>Nasa :</b> Sends the NASA daily picture by Mail.</p>
              <p className="pG"><b>Meteo :</b> Sends Paris' temperature by Mail.</p>
              <p className="pG"><b>Btc :</b> Sends the Bitcoin value (USD) by Mail.</p>
              <p className="pG"><b>Eth :</b> Sends the Etherum value (USD) by Mail.</p>
              <p className="pG"><b>Joke :</b> Sends a random joke by Mail.</p>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="center">
          <Button
            variant="contained"
            sx={{ mt: 3}}
            onClick={() => {logOut()}}
          >Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
