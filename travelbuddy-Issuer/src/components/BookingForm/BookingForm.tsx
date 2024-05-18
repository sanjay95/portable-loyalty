import React from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField,Paper } from '@mui/material';

const FlightBookingForm: React.FC = () => {
  return (
    <>
    {/* <div style={{ backgroundColor: '#1565C0', padding: 2, color: 'white' }}> */}
    <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
      <FormControl sx={{ m: 1, minWidth: 120, color: 'white' }}>
        <InputLabel>Trip Type</InputLabel>
        <Select>
          <MenuItem value="one-way">One Way</MenuItem>
          <MenuItem value="round-trip">Round Trip</MenuItem>
          <MenuItem value="multi-city">Multicity</MenuItem>
        </Select>
      </FormControl>
     
      <TextField label="From" sx={{ m: 1}} />
      <TextField label="To" sx={{ m: 1 }} />
      <TextField label="Departure Date" type="date" sx={{ m: 1 }} />
      <TextField label="Return Date" type="date" sx={{ m: 1 }} />
      <FormControl sx={{ m: 1, minWidth: 120, color: 'white' }}>
        <InputLabel>Traveller & Class</InputLabel>
        <Select>
          <MenuItem value="economy">Economy</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="first-class">First Class</MenuItem>
        </Select>
        </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120, color: 'white' }}>
      <Button variant="contained" sx={{ mt: 2, bgcolor: '#FF6F00' }}>Search</Button>
      </FormControl>
      </Paper>
     
    {/* </div> */}
    </>
  );
};

export default FlightBookingForm;
