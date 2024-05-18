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
  createTheme
} from "@mui/material";

import { useSession } from 'next-auth/react';

//Import custom hooks
import { useVerifyVpMutation } from 'src/hooks/verifier/useVerifyVpMutation';

import LoadingModal from 'src/components/LoadingModal/LoadingModal';
import ErrorModal from 'src/components/common/ErrorModal/ErrorModal';
import FetchDataBanner from 'src/components/FetchDataBanner';
import { hostUrl } from 'src/utils/env_public';
import { useInitiateProfileRequest } from '@affinidi/affinidi-react-auth';
import IssuingModal from 'src/components/IssuingModal/IssuingModal';

const theme = createTheme({
  typography: {
    fontSize: 28,
  },
});



const Registration: FC = () => {
  const { push } = useRouter();
  const [open, setOpen] = useState(false);
  const [startIssuance, setStartIssuance] = useState(false);

  //create state with defaults
  const [passinfo, setPassinfo] = useState<RegistrationProps>({ ...defaults, passtype: "Silver Card", passAmount: "Default" });

  //Prefill available data from session, if user is logged-in
  const { data: session } = useSession()
  useEffect(() => {
    if (!session || !session.user) return;
    setPassinfo(state => ({ ...state, email: session.user?.email, name: session.user?.name }))

  }, [session])


  //use hooks for Initiating request for User Profile VC
  const { isInitializing, isExtensionInstalled, handleInitiate,
    isLoading, error, errorDescription,
    profileData } = useInitiateProfileRequest({ callbackUrl: `${hostUrl}/registration-callback`, doVerification: true, useVerifyVpMutation });


  useEffect(() => {
    if (profileData) {
      //set state from profile VC
      setPassinfo(state => ({
        ...state,
        email: profileData.email,
        name: `${profileData.givenName || ''} ${profileData.familyName || ''}`.trim(),
        phoneNumber: profileData.phoneNumber,
        dob: profileData.birthdate,
        gender: profileData.gender,
        address: profileData.address?.formatted,
        postcode: profileData.address?.postalCode,
        city: profileData.address?.locality,
        country: profileData.address?.country,
      }));
      setOpen(true)

      push('/registration');

    }
  }, [profileData]);

  function Handleregister(): void {
    setStartIssuance(true);
  }

  return (
    <ThemeProvider theme={theme}>
      {/* //Display Error if any or loading modal popup */}
      {error && <ErrorModal error={error} errorDescription={errorDescription} closeCallback="/registration" />}
      {startIssuance && <IssuingModal title="Registering" message="Please wait for a few seconds until we register your details" issuanceType="silver" />}

      <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setOpen(false)}
        message="Hooray, we have got user profile from your Vault" />
      <S.Wrapper>
        <Container maxWidth="md">
          <Box sx={{ mt: 1 }}>
            <Typography variant="h4" align="center">
              One Card : Many Possibilities
            </Typography>
          </Box>

          <Card variant="outlined" sx={{ mt: 2 }}>
            <CardContent>
              <Box component="form">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    {!profileData && <>
                      <FetchDataBanner
                        title='Autofill the form with your personal details from your Affindi Vault'
                        handleParticipate={handleInitiate}
                        isInitializing={isInitializing}
                        isExtensionInstalled={isExtensionInstalled}
                      />
                    </>}
                  </Grid>
                </Grid>
                <ListItem sx={{ py: 1, px: 0 }}>
                  <ListItemText primary={passinfo.passtype} secondary="Use your air card at network partner" />
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                    {passinfo.passAmount}
                  </Typography>
                </ListItem>

                <Typography variant="h6" gutterBottom>
                  Personal Information
                </Typography>
                <TextField
                  label="Email" variant="standard" fullWidth margin="normal"
                  value={passinfo.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, email: e.target.value }))}
                />
                <TextField
                  label="Full Name" variant="standard" fullWidth margin="normal"
                  value={passinfo.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, name: e.target.value }))}
                />
                <TextField
                  label="Phone Number" variant="standard" fullWidth margin="normal"
                  value={passinfo.phoneNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, phoneNumber: e.target.value }))}
                />
                <TextField
                  label="Date of Birth" variant="standard" fullWidth margin="normal"
                  value={passinfo.dob}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, dob: e.target.value }))}
                />
                <TextField
                  label="Gender" variant="standard" fullWidth margin="normal"
                  value={passinfo.gender}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, gender: e.target.value }))}
                />

                <Typography variant="h6" gutterBottom>
                  Address Information
                </Typography>
                <TextField
                  label="Address" variant="standard" fullWidth margin="normal"
                  value={passinfo.address}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, address: e.target.value }))}
                />
                <TextField
                  label="Post Code" variant="standard" fullWidth margin="normal"
                  value={passinfo.postcode}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, postcode: e.target.value }))}
                />
                <TextField
                  label="City" variant="standard" fullWidth margin="normal"
                  value={passinfo.city}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, city: e.target.value }))}
                />
                <TextField
                  label="Country" variant="standard" fullWidth margin="normal"
                  value={passinfo.country}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, country: e.target.value }))}
                />

                <Button variant="contained" color="primary" onClick={Handleregister} fullWidth sx={{ mt: 2 }}>
                  Register
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Container>

      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Registration
type RegistrationProps = {
  passtype: string;
  passAmount: string;
  email: string | null | undefined;
  name: string | null | undefined;
  phoneNumber?: string;
  dob?: string;
  gender?: string;
  address?: string;
  postcode?: string;
  city?: string;
  country?: string;
};

const defaults: RegistrationProps = {
  passtype: "",
  passAmount: "",
  email: "",
  name: "",
  phoneNumber: "",
  dob: "",
  gender: "",
  address: "",
  postcode: "",
  city: "",
  country: "",
};