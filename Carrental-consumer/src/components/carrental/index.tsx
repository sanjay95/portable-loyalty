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

import LoadingModal from 'src/components/LoadingModal/LoadingModal';
import ErrorModal from 'src/components/common/ErrorModal/ErrorModal';
import FetchDataBanner from 'src/components/FetchDataBanner';
import SuccessDataBanner from 'src/components/SuccessDataBanner';
import { hostUrl, iotaConfigurationId, iotaQueryId } from 'src/utils/env_public';
import React from 'react';
import axios from 'axios';
import useIotaQuery from 'src/lib/hooks/useIotaQuery';



const theme = createTheme({
  typography: {
    fontSize: 28,
  },
});

interface Car {
  id: string;
  imageUrl: string;
  modelName: string;
  type: string; // e.g., Sedan, SUV, Truck
  hourlyRate: number;
  dailyRate: number;
  discount: number; // percentage discount (optional)
}
const cars = [
  {
    id: 'car-1',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/2018_Toyota_Camry_%28ASV70R%29_Ascent_sedan_%282018-08-27%29_01.jpg',
    modelName: 'Toyota Camry',
    type: 'Sedan',
    hourlyRate: 50,
    dailyRate: 300,
    discount: 10,
  },
  {
    id: 'car-2',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/HONDA_ACCORD_PLUG-IN_HYBRID_%28CY%29_China.jpg',
    modelName: 'Honda Accord',
    type: 'Sedan',
    hourlyRate: 45,
    dailyRate: 270,
    discount: 15,
  },
  {
    id: 'car-3',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/01/2023_D%D0%BEngfeng-Nissan_Altima_%28front%29.jpg',
    modelName: 'Nissan Altima',
    type: 'Sedan',
    hourlyRate: 40,
    dailyRate: 240,
  },
  {
    id: 'car-4',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Ford_Escape_%28fourth_generation%29_1X7A6220.jpg',
    modelName: 'Ford Escape',
    type: 'SUV',
    hourlyRate: 60,
    dailyRate: 360,
    discount: 8,
  },
  {
    id: 'car-5',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Toyota%2C_Paris_Motor_Show_2018%2C_Paris_%281Y7A1784%29.jpg',
    modelName: 'Toyota RAV4',
    type: 'SUV',
    hourlyRate: 65,
    dailyRate: 390,
  },
  {
    id: 'car-6',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Honda_CRV_Prototype_IMG_0206.jpg',
    modelName: 'Honda CR-V',
    type: 'SUV',
    hourlyRate: 62,
    dailyRate: 372,
    discount: 5,
  },
  {
    id: 'car-7',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/0_Jeep_Wrangler_Rubicon_%28JL%29_1.jpg',
    modelName: 'Jeep Wrangler',
    type: 'SUV',
    hourlyRate: 70,
    dailyRate: 420,
  }
];


const CarRental = () => {

  const { push } = useRouter();
  const [open, setOpen] = useState(false);
  const [flights, setFlights] = useState<any>([]);
  const [airMiles, setSetAirMiles] = useState<boolean>();
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);

  const handleDiscountClick = (car: Car) => {
    // setIsDiscountApplied(!isDiscountApplied); // Toggle discount state
    setIsDiscountApplied(true); // Toggle discount state
  };
  const { isInitializing, statusMessage, handleInitiate, isRequestPrepared, isWaitingForResponse, errorMessage, dataRequest, data } = useIotaQuery({ configurationId: iotaConfigurationId, queryId: iotaQueryId });

  useEffect(() => {
    if (data) {
      console.log('data', data);
      setOpen(true)
      setSetAirMiles(true);
      setIsDiscountApplied(true);
      
    };
    // push('/')
  }, [data]);



  const getDisplayPrice = (car: Car) => {
    if (isDiscountApplied && car.discount) {
      const discountAmount = car.hourlyRate * (car.discount / 100);
      return car.hourlyRate - discountAmount;
    }
    return car.hourlyRate;
  };

  const getDailyDisplayPrice = (car: Car) => {
    if (isDiscountApplied && car.discount) {
      const discountAmount = car.dailyRate * (car.discount / 100);
      return car.dailyRate - discountAmount;
    }
    return car.dailyRate;
  };


  console.log('airMiles', airMiles);

  return (
    <ThemeProvider theme={theme}>
      {errorMessage && <ErrorModal error={errorMessage} errorDescription={errorMessage} closeCallback="/" />}
      {isInitializing && <LoadingModal title="Verifying" message="Please wait for a few seconds until we process your request." />}

      <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setOpen(false)}
        message="Hooray, we have got airline membership card from your Vault" />
      <S.Wrapper>
        <Container>
          <Box sx={{ mt: 1 }}>
            <Typography variant="h5" align="center">
              {/* Select Your Car */}
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {!airMiles && <>
                <FetchDataBanner
                      title="Get discount with your frequent flyer membership card"
                      handleParticipate={handleInitiate}
                      isInitializing={isInitializing}
                    />
              </>}
              {airMiles && <SuccessDataBanner title='Additional premium member discount has been applied'></SuccessDataBanner>
              }
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {cars.map((car) => (
              <Grid item xs={12} md={4} key={car.id}>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'box-shadow 0.3s ease',
                    cursor: 'pointer', // Add cursor pointer
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)'; // Increase shadow on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)'; // Restore original shadow
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100px',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      marginBottom: '16px',
                    }}
                  >
                    <img src={car.imageUrl} alt={car.modelName} style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
                  </div>
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '1px' }}>
                      <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: '0' }}>{car.modelName}</h3>
                      <p>Type: {car.type}</p>
                    </div>
                    <div>
                      <div style={{marginBottom:"1rem"}}>
                        <p style={{ display: "inline" }}>Hourly Rate: </p>
                        {isDiscountApplied && (
                          <>
                            <span style={{ textDecoration: "line-through" }}> ${car.hourlyRate}</span>
                          </>
                        )}
                        <span style={{ marginLeft: "10px" }}> ${getDisplayPrice(car)}</span>
                      </div>

                      <div style={{marginBottom:"1rem"}}>
                        <p style={{ display: "inline" }}>Daily Rate: </p>
                        {isDiscountApplied && (
                          <>
                            <span style={{ textDecoration: "line-through" }}> ${car.dailyRate}</span>
                          </>
                        )}
                        <span style={{ marginLeft: "10px" }}> ${getDailyDisplayPrice(car)}</span>
                      </div>

                      {isDiscountApplied && car.discount && <p style={{ color: '#008000' }}>Discount: {car.discount}%</p>}
                    </div>
                  </div>
                  {/* Optional button (if needed) */}
                  <div style={{placeSelf:'center',padding:'1rem'}}>
                  <button
                    onClick={() => handleDiscountClick(car)}
                    disabled={isDiscountApplied}
                    style={{
                      marginTop: 'auto',
                      backgroundColor: '#0052cc',
                      color: '#ffffff',
                      padding: '8px',
                      borderRadius: '4px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      width:'120px'
                    }}
                  >
                    Select
                    {/* {isDiscountApplied ? 'Discount Applied' : 'Claim Discount'} */}
                  </button>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>


        </Container>
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default CarRental;


