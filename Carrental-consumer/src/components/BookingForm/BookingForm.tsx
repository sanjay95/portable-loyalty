import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Paper, Box, Grid } from '@mui/material';

const locations = [
  "123 Main St, Anytown, CA",
  "456 Elm St, Anytown, CA",
  "789 Maple Ave, Anytown, CA",
  // ... more locations
];

type ModalProps = {

  setResult: any
};

const RentalBookingForm: React.FC<ModalProps> = ({setResult}) => {
  const date = {
    today: new Date().toJSON().slice(0, 10).replace(/-/g, '-'),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  return (
    <>
      {/* <div style={{ backgroundColor: '#1565C0', padding: 2, color: 'white' }}> */}
      <Paper elevation={1} sx={{ padding: 2, marginBottom: 2, height: 180 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid padding={6}>
            <FormControl sx={{ m: 1, minWidth: 160, color: 'white' }}>
              <InputLabel>Drop-off location</InputLabel>
              <Select>
                <MenuItem value="Same">Same</MenuItem>
                <MenuItem value="Different">Different</MenuItem>
              </Select>
            </FormControl>

            <TextField label="Pick-up location" sx={{ m: 1, width: 300 }} />
            {/* <TextField label="To" sx={{ m: 1, width:160 }} /> */}
            <TextField label="Pickup Date" type="date" sx={{ m: 1 }} defaultValue={date.today} />
            <TextField label="Pickup Time" type="time" sx={{ m: 1 }} defaultValue={date.time} />
            <TextField label="Return Date" type="date" sx={{ m: 1 }} defaultValue={date.today} />
            <TextField label="Return Time" type="time" sx={{ m: 1 }} defaultValue={date.time} />

            <FormControl sx={{ m: 1, minWidth: 120, color: 'white' }}>
              <Button variant="contained" sx={{ mt: 0, bgcolor: 'darkslategrey', height:'6rem' }} onClick={()=>{setResult(true)}}>View Vehicles</Button>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {/* </div> */}
    </>
  );
};

export default RentalBookingForm;
