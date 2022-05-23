import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 50,
    },
  },
};

export default function List(props) {
  return (
    <FormControl sx={{width: 225, m: 1}}>
      <InputLabel id={props.value}>{props.value}</InputLabel>
      <Select
      labelId={props.value}
      id="list"
      onChange={props.handleChange}
      input={<OutlinedInput label={props.value}/>}
      defaultValue=""
      MenuProps={MenuProps}
      >
        {props.list.map((li) => (
          <MenuItem
          key={li}
          value={li}
          >
            {li}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
