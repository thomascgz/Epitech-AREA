import React from 'react';
import ApiIcon from '@mui/icons-material/Api';
import Switch from '@mui/material/Switch';
import './App.css';

export default function Widget(props) {
  const handleChange = (event) => {
    const tmp = [...props.area];
    if (props.item.isActive === true)
      props.item.isActive = false;
    else
      props.item.isActive = true;
    props.setArea(tmp);
  };

  return (
    <div className="widget">
      <ApiIcon sx={{ color: '#bdb2ff' }}/>
      <div className="switch">
        <Switch color="success" size="small" onChange={handleChange} checked={props.item.isActive}/>
      </div>
      <div className="iconSearch">
        <p>{props.item.action} / {props.item.reaction}</p>
      </div>
    </div>
  );
}
