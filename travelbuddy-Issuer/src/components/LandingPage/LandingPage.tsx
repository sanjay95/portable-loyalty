import React from "react";
import { Button, Container, FormControl, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import FlightBookingForm from "../BookingForm/BookingForm";
import FlightDeals from "../BookingForm/deals";

const LandingPage = () => {
  function handleclick(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {

  }

  return (
    <>
      <div style={{ backgroundColor: '#1565C0', padding: '20px', color: 'white' }}>
        <Container >
          <FlightBookingForm />
        </Container>
      </div>
      <div style={{ padding: '20px', color: 'white' }}>
      <Paper elevation={1} sx={{ padding: 2, marginBottom: 2 }}>
        <Container sx={{ paddingTop: 5 }}>
        
             <FormControl component="fieldset">
              <h2 className='text-lg font-bold mb-3'>Register for Rward Card:</h2>
              And use it at places
            </FormControl>
             <Container sx={{ display: "flex", paddingTop: 2, alignItems: "center", justifyContent: "center" }}>
              <Button variant="contained" style={{ marginRight: 2 }} onClick={handleclick}>Register</Button>
            </Container>
        

        </Container>
        </Paper>
      </div>
    </>
  );
};


export default LandingPage;
