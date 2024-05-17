
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
// import Box from '../common/Box/Box'
import * as S from './LandingPage.styled'
import { FC } from 'react'
import Image from 'next/image'

import logo from 'public/images/logo.png'
import {
  Paper,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  ThemeProvider,
  Alert,
  ListItem,
  ListItemText,
  Snackbar,
  createTheme,
} from '@mui/material'
import { Padding } from "@mui/icons-material";


const LandingPage: React.FC = () => {
  return (

    <Container sx={{ paddingTop: 2 }} >
      <Box component="form" width="80%" margin="0 auto">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Paper elevation={2}>
              <Grid item xs={12} md={6}>
                <FormControl component="fieldset">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h4 className='text-lg font-bold mb-3' style={{ marginRight: '10px' }}>Trip type:</h4>
                    <RadioGroup aria-label="trip-type" name="trip-type" value={''} style={{ display: 'flex', flexDirection: 'row' }}>
                      <FormControlLabel value="one-way" control={<Radio />} label="One-way" />
                      <FormControlLabel value="round-way" control={<Radio />} label="Round" />
                    </RadioGroup>
                  </div>

                </FormControl>



              </Grid>
              <Grid item xs={12} md={6}>

              </Grid>

              {/* <BookingForm /> */}

            </Paper>
          </Grid>
        </Grid>

        <Container sx={{ display: "flex", paddingTop: 2, alignItems: "center", justifyContent: "center" }}>
          <Button variant="contained" style={{ marginRight: 2 }} onClick={() => window.open('', '_blank')}>Book Tickets</Button>
          <Button variant="outlined" onClick={() => window.open('/registration', '_blank')}>Learn More</Button>
        </Container>


      </Box>
      <Grid container spacing={3} justifyContent="center" sx={{ paddingTop: "15" }}>
        <Grid item xs={12}>
          <Paper elevation={2}>
            <form className='max-w-5xl px-6 pt-8 pb-10 w-full mx-auto bg-white rounded-lg drop-shadow'>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12}>
                  <FormControl component="fieldset">
                    <h2 className='text-lg font-bold mb-3'>Register for Rward Card:</h2>
                    And use it at places
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  {/* Align other controls here */}
                </Grid>
              </Grid>
              {/* <BookingForm /> */}
            </form>
            <Container sx={{ display: "flex", paddingTop: 2, alignItems: "center", justifyContent: "center" }}>
              <Button variant="contained" style={{ marginRight: 2 }} onClick={() => window.open('/registration', '_blank')}>Register</Button>

            </Container>
          </Paper>
        </Grid>
      </Grid>

    </Container>




  )
}

export default LandingPage;
