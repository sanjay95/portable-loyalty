// import { FC } from 'react'
// import Image from 'next/image'

// import logo from 'public/images/logo.png'
// import Box from '../common/Box/Box'

// import * as S from './LandingPage.styled'

// type Props = {
// };

// const LandingPage: FC<Props> = () => {

//   return (
//     <Box direction='row'>
//       <S.ContentContainer justifyContent='center'>
//         <S.Title>
//           India Event 2023
//           <div>More to Learn</div>
//         </S.Title>

//         <S.Content>
//           <p>28th Oct 2023 - In Person Conference Pune, India</p>
//         </S.Content>

//         <S.ButtonContainer direction='row'>
//           <S.Button variant='primary' onClick={() => window.open('https://www.reactindia.io/conferences/2023/tickets', '_blank')}>Book Tickets</S.Button>
//           <S.Button variant='secondary' onClick={() => window.open('https://www.reactindia.io', '_blank')}>Learn More</S.Button>
//         </S.ButtonContainer>
//       </S.ContentContainer>

//       <S.Logo direction='row' justifyContent='flex-end' flex={1}>
//         <Image src={logo.src} alt='logo' width={700} height={487} />
//       </S.Logo>
//     </Box>
//   )
// }

// export default LandingPage
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "../BookingForm/BookingForm";
import { Button } from "@mui/material";
import { Container, Grid, Paper, FormControl, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Button using Material-UI
const StyledButton = styled(Button)({
  padding: "12px",
  borderRadius: "4px",
  backgroundColor: "#3f51b5",
  color: "white",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#303f9f",
  },
});

const LandingPage: React.FC = () => {
  // state
  const [trip, setTrip] = useState<{ tripType: string, vehicleType: string }[]>([{
    tripType: "",
    vehicleType: "",
  }]);

  const [multi, setMulti] = useState<number[]>([1]);

  // trip type
  const handleTrip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMulti([1]);

    let mainTrip = [...trip];
    mainTrip[0].tripType = event.target.value;

    setTrip(mainTrip);
  }

  // vehicle type
  const handleVehicle = (event: React.ChangeEvent<HTMLInputElement>) => {
    let mainTrip = [...trip];
    mainTrip[0].vehicleType = event.target.value;

    setTrip(mainTrip);
  }

  // multi city
  const handleMultiCity = () => {
    const mainMulti = [...multi, 1];
    setMulti(mainMulti);
  }

  return (
   
        <Container maxWidth="md">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <Paper elevation={3}>
                <form className='max-w-5xl px-6 pt-8 pb-10 w-full mx-auto bg-white rounded-lg drop-shadow'>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <FormControl component="fieldset">
                        <h2 className='text-lg font-bold mb-3'>Trip type:</h2>
                        <RadioGroup row aria-label="trip-type" name="trip-type" value={trip[0].tripType} onChange={handleTrip}>
                          <FormControlLabel value="one-way" control={<Radio />} label="One-way" />
                          <FormControlLabel value="round-way" control={<Radio />} label="Round" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl component="fieldset">
                        <h2 className='text-lg font-bold mb-3'>Class Type:</h2>
                        <RadioGroup row aria-label="vehicle-type" name="vehicle-type" value={trip[0].vehicleType} onChange={handleVehicle}>
                          <FormControlLabel value="bus" control={<Radio />} label="Economy" />
                          <FormControlLabel value="truck" control={<Radio />} label="Premium Economy" />
                          <FormControlLabel value="bike" control={<Radio />} label="Business" />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                  {(trip[0].tripType === 'multi-city') &&
                    <div className='inline-block mb-3 font-medium cursor-pointer p-2 bg-gray-200 rounded mr-1 transition-all duration-300 hover:bg-gray-300' onClick={handleMultiCity}>+ Add city</div>}

                  {multi.map((item, index) => <BookingForm key={index} trip={trip} />)}

                  <div className="w-full text-center pt-10">
                    <StyledButton >Send Request</StyledButton>
                  </div>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
     
  )
}

export default LandingPage;
