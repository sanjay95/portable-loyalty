import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ErrorModal from 'src/components/common/ErrorModal/ErrorModal';
import FetchDataBanner from 'src/components/FetchDataBanner';
import { iotaConfigurationId, iotaQueryId } from 'src/utils/env_public';
import useIotaQuery from 'src/lib/hooks/useIotaQuery';
import IssuingModal from 'src/components/IssuingModal/IssuingModal';
import { membership, pxToRem } from 'src/utils';
import * as S from './index.styled';
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
import LoadingModal from '../LoadingModal/LoadingModal';


const theme = createTheme({
  typography: {
    fontSize: 30,
    fontFamily: 'lato,sans-serif',
    fontWeightMedium: 500
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const Registration: FC = () => {
  const { push } = useRouter();
  const [open, setOpen] = useState(false);
  const [startIssuance, setStartIssuance] = useState(false);

  //create state with defaults
  const [passinfo, setPassinfo] = useState<RegistrationProps>({ ...defaults, passtype: "Silver Card", passAmount: "Default" });

  //Prefill available data from session, if user is logged-in
  const { data: session } = useSession();
  useEffect(() => {
    if (!session || !session.user) return;
    setPassinfo(state => ({ ...state, email: session.user?.email, name: session.user?.name }));
  }, [session]);

  //use hooks for Initiating request for User Profile VC
  const { isInitializing, statusMessage, handleInitiate, isRequestPrepared, isWaitingForResponse, errorMessage, dataRequest, data } = useIotaQuery({ configurationId: iotaConfigurationId, queryId: iotaQueryId });

  useEffect(() => {
    if (data) {
      console.log('data', data);
      //set state from profile VC
      setPassinfo(state => ({
        ...state,
        email: data.email,
        name: `${data.givenName || ''} ${data.familyName || ''}`.trim(),
        phoneNumber: data.phoneNumber,
        dob: data.birthdate,
        gender: data.gender,
        address: data.formatted,
        postcode: data.postalCode,
        city: data.locality,
        country: data.country,
      }));
      setOpen(true);
      push('/registration');
    }
  }, [data]);

  function handleRegister(): void {
    setStartIssuance(true);
  }

  return (
    <ThemeProvider theme={theme}>
      {isInitializing && <LoadingModal title='Please wait' message={`While we fetch your profile data from Affinidi vault`} />}
      {errorMessage && <ErrorModal error={errorMessage} errorDescription={errorMessage} closeCallback="/registration" />}
      {startIssuance && <IssuingModal title="Registering" message="Please wait for a few seconds until we register your details" issuanceType={membership.Silver} />}
      <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} onClose={() => setOpen(false)} message="Hooray, we have got user profile from your Vault" />
      <S.Wrapper>
        <Container maxWidth="md">
          <Box sx={{ mt: 1 }}>
            <Typography variant="h4" align="center">
              One Membership : Many Possibilities
            </Typography>
          </Box>
          <Card variant="outlined" sx={{ mt: 2 }}>
            <CardContent>
              <Box component="form">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FetchDataBanner
                      title="Simplify filling out forms with your Affindi Vault credentials"
                      handleParticipate={handleInitiate}
                      isInitializing={isInitializing}
                    />
                  </Grid>
                </Grid>
                <Card variant="outlined" sx={{ mt: 1 }}>
                  <CardContent>

                    <Typography variant="body1" gutterBottom>
                      {passinfo.passtype} : Your Starting Point .
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Use your air card at network partner. Upgrade for additional benefits!
                    </Typography>

                  </CardContent>
                </Card>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                      Personal Information
                    </Typography>
                    <TextField label="Email" variant="outlined" fullWidth margin="normal" value={passinfo.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, email: e.target.value }))} />
                    <TextField label="Phone Number" variant="outlined" fullWidth margin="normal" value={passinfo.phoneNumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, phoneNumber: e.target.value }))} />
                    <TextField label="Date of Birth" variant="outlined" fullWidth margin="normal" value={passinfo.dob} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, dob: e.target.value }))} />
                    <TextField label="Gender" variant="outlined" fullWidth margin="normal" value={passinfo.gender} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, gender: e.target.value }))} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                      Address Information
                    </Typography>
                    <TextField label="Address" variant="outlined" fullWidth margin="normal" value={passinfo.address} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, address: e.target.value }))} />
                    <TextField label="Post Code" variant="outlined" fullWidth margin="normal" value={passinfo.postcode} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, postcode: e.target.value }))} />
                    <TextField label="City" variant="outlined" fullWidth margin="normal" value={passinfo.city} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, city: e.target.value }))} />
                    <TextField label="Country" variant="outlined" fullWidth margin="normal" value={passinfo.country} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassinfo(p => ({ ...p, country: e.target.value }))} />
                  </Grid>
                </Grid>

                <Grid container justifyContent="center">
                  <Button variant="contained" color="primary" onClick={handleRegister} sx={{ mt: 2, width: 'fit-content' }}>
                    Register
                  </Button>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </S.Wrapper>
    </ThemeProvider>
  );
};

export default Registration;

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
