import React, { useEffect } from 'react';
import { setDoc, getFirestore, doc } from "firebase/firestore";
import axios from "axios";
import AddButton from './AddButton';
import Widget from './Widget';
import './App.css';

const db = getFirestore();

export default function Home(props) {
  const aRea = async () => {
    try {
      await setDoc(doc(db, "Users", props.info.uid), {area: props.area});
    } catch (err) {}
  }

  useEffect(() => {
    if (props.area.length !== 0) {
      aRea();
      if (props.name == "") {
        axios.get("/Area/" + props.info.uid)
      } else {
        axios.get("/Email/" + props.name)
        axios.get("/Token/" + props.token)
        axios.get("/Area/" + props.info.uid)
      }
    }
  }, [props.area]);

  return (
    <div className="home">
      <div className="addButton">
        <AddButton area={props.area} setArea={props.setArea} sign={props.sign} uid={props.info.uid} name={props.name} />
      </div>
      <div className="area">
        {props.area.map((item, index) => {
          return (
            <Widget area={props.area} item={item} setArea={props.setArea} key={index}/>
          )
        })}
      </div>
    </div>
  );
}
