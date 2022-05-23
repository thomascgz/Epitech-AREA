import React from 'react';
import axios from "axios";
import './App.css';

export default function Home(props) {
  const apk = () => {
    axios.get("/client.apk")
		.catch(err =>	{
      console.log(err);
    });
  }

  apk()
  return (
    <div className="home">
    </div>
  );
}
