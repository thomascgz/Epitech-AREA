import React from 'react';
import MiniDrawer from './Menu';
import Apk from './Apk';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<MiniDrawer/>}/>
        <Route exact path="/client.apk" element={<Apk/>}/>
      </Routes>
    </div>
  )
}

export default App;
