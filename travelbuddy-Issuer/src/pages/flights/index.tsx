import { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import * as S from './index.styled'
import {
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
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper
} from "@mui/material";

import FlightLandTwoToneIcon from '@mui/icons-material/FlightLandTwoTone';
import FlightTakeoffTwoToneIcon from '@mui/icons-material/FlightTakeoffTwoTone';
import LoyaltyTwoToneIcon from '@mui/icons-material/LoyaltyTwoTone';
import CardGiftcardTwoToneIcon from '@mui/icons-material/CardGiftcardTwoTone';
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';

//Import custom hooks
import { useVerifyVpMutation } from 'src/hooks/verifier/useVerifyVpMutation';

import LoadingModal from 'src/components/LoadingModal/LoadingModal';
import ErrorModal from 'src/components/common/ErrorModal/ErrorModal';
import ClaimModal from 'src/components/common/ClaimModel/Index';
import ClaimRewardsBanner from 'src/components/ClaimRewardsBanner';
import { hostUrl } from 'src/utils/env_public';
import React from 'react';
import axios from 'axios';
import useInitiateMoviePreferenceRequest from 'src/hooks/useInitiateMoviePreferenceRequest';
import IssuingModal from 'src/components/IssuingModal/IssuingModal';
import { membership } from 'src/utils';

const theme = createTheme({
  typography: {
    fontSize: 28,
  },
});

const Flights: FC = () => {
  const { push } = useRouter();
  const [open, setOpen] = useState(false);
  const [flights, setFlights] = useState<any>([]);
  const [moviePreferences, setMoviePreferences] = useState();
  const [claiming, setClaiming] = useState(false);
  const [claimInititated, setClaimInititated] =useState(false);


  // //use hooks for Initiating request for User Profile VC
  // const { isInitializing, isExtensionInstalled, handleInitiate,
  //   isLoading, error, errorDescription,
  //   data } = useInitiateMoviePreferenceRequest({ callbackUrl: `${hostUrl}/flights-callback`, doVerification: false });

  const handleClaim = () => {
    setClaiming(true);
  }
  const handleClaimInitiate =()=>{
    setClaimInititated(true);
    setClaiming(false);
  }
  // useEffect(() => {
  //   if (data) {

  //     //set state from profile VC
  //     setMoviePreferences((state: any) => ({
  //       ...state,
  //       ...data
  //     }));
  //     setOpen(true)

  //     push('/flights');

  //   }
  // }, [data]);

  useEffect(() => {

    const searchFlights = async () => {
      const response = await axios.post(
        `${hostUrl}/api/flights/search`,
        {
          method: 'POST', data: moviePreferences
        }
      )
      let dataResponse = response.data
      if (typeof (dataResponse) == 'string') {
        dataResponse = JSON.parse(dataResponse);
      }

      setFlights(dataResponse);
    }

    searchFlights();
  }, [moviePreferences]);

  return (
    <ThemeProvider theme={theme}>
      {/* //Display Error if any or loading modal popup */}
      {/* {error && <ErrorModal error={error} errorDescription={errorDescription} closeCallback="/flights" />}
      {isLoading && <LoadingModal title="Verifying" message="Please wait for a few seconds until we process your request." />} */}
      {claiming && <ClaimModal closeCallback='/flights' handleClaimInitiate={handleClaimInitiate} />}
      {claimInititated && <IssuingModal title="Upgrading" message="Please wait for a few seconds until we register your details" issuanceType={membership.Platinum} />}
      
      <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setOpen(false)}
        message="Hooray, we have got your movie preferences from your Vault" />

      <S.Wrapper>
        <Container>
          <Box sx={{ mt: 1 }}>
            <Typography variant="h4" align="center">
              Your booked flights with us
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {flights && <>
                <ClaimRewardsBanner
                  title="Congratulations! You're eligible for the Platinum Card. Claim it online quickly and easily."
                  handleParticipate={handleClaim}
                />
              </>}
              {!flights && <>
                {/* <p>Your Movie Preferences</p>
                <p>Actors : {moviePreferences?.actors?.join(", ") || 'None'}</p>
                <p>Directors : {moviePreferences?.directors?.join(", ") || 'None'}</p>
                <p>Genres : {moviePreferences?.genres?.join(", ") || 'None'}</p> */}
              </>
              }
            </Grid>
          </Grid>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><FlightTakeoffTwoToneIcon /> From</TableCell>
                  <TableCell><FlightLandTwoToneIcon /> To</TableCell>
                  <TableCell><CalendarMonthTwoToneIcon /> Departure Time</TableCell>
                  <TableCell><PaymentTwoToneIcon /> Fare</TableCell>
                  <TableCell><CardGiftcardTwoToneIcon /> Miles Earned</TableCell>
                  <TableCell><LoyaltyTwoToneIcon /> Claimable</TableCell> {/* Corrected spelling */}
                </TableRow>
              </TableHead>
              <TableBody>
                {flights.map((row) => (
                  <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell align="left">{row.from}</TableCell> 
                    <TableCell align="left">{row.to}</TableCell> 
                    <TableCell align="left">{row.departureDateTime}</TableCell> 
                    <TableCell align="left">$ {row.fare}</TableCell> 
                    <TableCell align="left">{row.miles}</TableCell> 
                    <TableCell align="left">{row.claimable}</TableCell> 
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

        </Container>
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Flights
