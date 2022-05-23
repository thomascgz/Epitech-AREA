import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {auth} from './firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { setDoc, getFirestore, doc } from "firebase/firestore";
import './App.css';

const db = getFirestore();
const theme = createTheme();

export default function Sign(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const res = await createUserWithEmailAndPassword(auth, data.get('email'), data.get('password'));
      console.log(res)
      alert("Account succesfully created !");
      props.setSigns("connected");
      props.setInfo({email: data.get('email'), uid: res.user.uid, imageUrl: ""});
      await setDoc(doc(db, "Users", res.user.uid), {area: []});
    } catch (err) {
      alert(`Failed to signUp: ${err.code}`);
    }
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
          <Typography component="h1" variant="h4">Sign Up</Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, mb: 1}}>
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
            >Sign Up
            </Button>
          </Box>
          <p>Vous avez un compte ? <a href="/#" className="link" onClick={() => {props.setSigns("in")}} style={{cursor: 'pointer'}}>Connectez-vous</a></p>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
