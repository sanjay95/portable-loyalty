import { FC, useEffect, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import CarRental from 'src/components/carrental'
import RentalBookingForm from "src/components/BookingForm/BookingForm";
import { Container, createTheme, ThemeProvider } from '@mui/material'
import useIotaQuery from 'src/lib/hooks/useIotaQuery';
import { hostUrl, iotaConfigurationId, iotaQueryId } from 'src/utils/env_public';
import { useRouter } from 'next/router';
const theme = createTheme({
  typography: {
    fontSize: 26,
  },
});

const Home: FC = () => {
  const { push } = useRouter();
  const { data: session } = useSession()
  const { userId, name } = session?.user || {}
  const [result, setResult] = useState(false);
  const carRentalRef = useRef<HTMLDivElement>(null);

  


  useEffect(() => {

    if (carRentalRef.current) {
      carRentalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [result,carRentalRef]);

  // useEffect(() => {

  //   if (data) {
  //    setResult(true);
  //    push('/')
  //   }
  // }, [data]);
  
  
  return (

    <>
      <ThemeProvider theme={theme}>
        {/* <div style={{ padding: '20rem', color: 'white' }}> */}
          <Container maxWidth="xl" sx={{paddingTop:'20rem'}}>
            <RentalBookingForm setResult={setResult} />
          </Container>
        
        {/* </div> */}
      
      {result && 
        <div id='rental' ref={carRentalRef}> 
          <CarRental />
        </div>
      }
      </ThemeProvider>

    </>
  )

}

export default Home

