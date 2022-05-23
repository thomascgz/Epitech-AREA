import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { auth } from './firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { getDoc, setDoc, getFirestore, doc } from "firebase/firestore";
import './App.css';

const theme = createTheme();
const db = getFirestore();
var tmp;

export default function Sign(props) {

  const getAreaDB = async (uid) => {
    try {
      const ref = doc(db, "Users", uid);
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        tmp = docSnap.data();
        props.setArea(tmp.area)
      } else
        await setDoc(doc(db, "Users", uid), {area: []});
    } catch {}
  }

  const onSucces = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const res = await signInWithEmailAndPassword(auth, data.get('email'), data.get('password'));
      console.log(res)
      alert(`Logged in successfully welcome ${data.get('email')} 😍.`);
      props.setSigns("connected");
      props.setInfo({email: data.get('email'), uid: res.user.uid, name: "", imageUrl: ""});
      getAreaDB(res.user.uid);
    } catch {
      alert(`Failed to login. 😢`);
    }
  };

 const onFailure = (res) => {
    alert(`Failed to login. 😢`);
 };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4">Sign In</Typography>
          <Box component="form" noValidate onSubmit={onSucces} sx={{ mt: 3, mb: 1}}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3}}
            >Sign In
            </Button>
          </Box>
          <p>Vous n’avez pas de compte ? <a href="/#" className="link" onClick={() => {props.setSigns("up")}} style={{cursor: 'pointer'}}>Inscrivez-vous</a></p>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
