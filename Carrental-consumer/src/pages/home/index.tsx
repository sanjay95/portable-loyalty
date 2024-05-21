import { FC, useEffect, useState } from 'react'

import DebtIcon from 'public/images/debt-icon.svg'
import FinanceIcon from 'public/images/finance-icon.svg'
import EducationIcon from 'public/images/education-icon.svg'

import * as S from './index.styled'
import { useSession } from 'next-auth/react'
import WelcomeBanner from 'src/components/WelcomeBanner/WelcomeBanner'
import LandingPage from 'src/components/LandingPage/LandingPage'
import Tile from 'src/components/common/Tile/Tile'
import CarRental from 'src/components/carrental'
import RentalBookingForm from "src/components/BookingForm/BookingForm";
import { Container, createTheme, ThemeProvider } from '@mui/material'
import { Fullscreen } from '@mui/icons-material'
const theme = createTheme({
  typography: {
    fontSize: 26,
  },
});

const Home: FC = () => {
  const { data: session } = useSession()
  const { userId, name } = session?.user || {}

  return (
    // <S.Wrapper>
<>
      <ThemeProvider theme={theme}>
        <div style={{ padding: '20rem', color: 'white' }}>
          <Container maxWidth="xl">
            <RentalBookingForm />
          </Container>
        </div>
      </ThemeProvider>
      <CarRental />

      </>
    // </S.Wrapper>
  )
}

export default Home

