import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import { getFirestore, doc, getDoc } from "firebase/firestore";
import List from './List';

const actionl = [ 'Timer - 30s', 'Meteo - Paris', 'Btc - USD', 'Eth - USD', 'Nasa - Img of the day', 'Covid - Nbr of cases'];

const actionlG = [ 'Timer - 30s', 'Meteo - Paris', 'Btc - USD', 'Eth - USD', 'Nasa - Img of the day', 'Covid - Nbr of cases', 'Google - Profile picture', 'Google - Username'];

const reactionlG = [ 'Btc - Sms', 'Eth - Sms', 'Joke - Sms', 'Memes - Mail', 'Nasa - Mail', 'Meteo - Mail', 'Btc - Mail', 'Eth - Mail', 'Joke - Mail'];

const reactionl = [ 'Btc - Sms', 'Eth - Sms', 'Joke - Sms'];

const db = getFirestore();

var tmp;

export default function AddButton(props) {
  const [open, setOpen] = useState(false);
  const [str1, setStr1] = useState('');
  const [str2, setStr2] = useState('');

  const handleChangeA = event => {
    setStr1(event.target.value);
  };

  const handleChangeR = event => {
    setStr2(event.target.value);
  };

  const getAreaDB = async () => {
    try {
      const ref = doc(db, "Users", props.uid);
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        tmp = docSnap.data();
        props.setArea(tmp.area)
        console.log(tmp.area)
      }
    } catch (err) {console.log(err)}
  }

  const listG = () => {
    if (props.name == "") {
      return (
        <div>
          <List value="Action" list={actionl} handleChange={handleChangeA}/>
          <List value="Reaction" list={reactionl} handleChange={handleChangeR}/>
        </div>
      )
    } else {
      return (
        <div>
          <List value="Action" list={actionlG} handleChange={handleChangeA}/>
          <List value="Reaction" list={reactionlG} handleChange={handleChangeR}/>
        </div>
      )
    }
  }

  if (props.sign === "connected") {
    return (
      <Box>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Fab size="small" color="primary" aria-label="add" onClick={() => {setOpen(true)}}>
            <AddIcon />
          </Fab>
          <IconButton onClick={() => {getAreaDB()}}>
            <RefreshIcon />
          </IconButton>
        </Box>
        <Dialog disableEscapeKeyDown open={open} onClose={() => {setOpen(false)}}>
          <DialogTitle>Add an AREA</DialogTitle>
          <DialogContent>
            <Box component="div" sx={{ display: 'flex'}}>
              {listG()}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {setOpen(false)}}>Cancel</Button>
            <Button onClick={() => {props.setArea([...props.area, {action: str1, reaction: str2, isActive: false}]); setOpen(false)}}>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
  } else {
    return (
      <Box>
        <Fab size="small" color="primary" aria-label="add" onClick={() => {setOpen(true)}} disabled>
          <AddIcon />
        </Fab>
      </Box>
    );
  }
}
