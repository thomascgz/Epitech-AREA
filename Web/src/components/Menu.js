import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import Home from './Home';

export default function PermanentDrawerLeft() {
  const [area, setArea] = useState([]);
  const [page, setPage] = useState("home");
  const [sign, setSign] = useState("in");
  const [info, setInfo] = useState({});
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("rien");

  const pages = () => {
    if (page === "sign") {
      if (sign === "in")
        return <SignIn setSigns={setSign} setInfo={setInfo} setArea={setArea} />
      else if (sign === "up")
        return <SignUp setSigns={setSign} setInfo={setInfo} />
      else if (sign === "connected")
        return <Profile setSigns={setSign} info={info} setInfo={setInfo} setArea={setArea} token={token} setToken={setToken} name={name} setName={setName} img={img} setImg={setImg} />
    } else if (page === "home")
      return <Home sign={sign} info={info} area={area} setArea={setArea} token={token} name={name} />
  }

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: "100%", backgroundColor: '#1D2D51' }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Area
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          flexShrink: 0,
          backgroundColor: '#1D2D51',
          '& .MuiDrawer-paper': {
            width: 57,
            mt: 8
          },
        }}
        variant="permanent"
      >
        <List>
          {['a', 'b'].map(item => (
            <ListItem key={item}>
              <ListItemIcon>
                {item === 'a' ? <IconButton sx={{right: '8px'}} onClick={() => {setPage("home")}}><HomeIcon /></IconButton> : ''}
                {item === 'b' ? <IconButton sx={{right: '8px'}} onClick={() => {setPage("sign")}}><PersonIcon /></IconButton> : ''}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3,}}
      >
        <Toolbar />
        <div className="menu">
          {pages()}
        </div>
      </Box>
    </Box>
  );
}
