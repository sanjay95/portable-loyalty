import React, { useEffect, useState } from 'react';
import * as S from './index.styled';
import {
  IotaRequest,
  IotaResponse,
  OpenMode,
  Session,
} from "@affinidi-tdk/iota-browser";
import { IotaCredentials } from "@affinidi-tdk/iota-core";
import LoadingModal from 'src/components/LoadingModal/LoadingModal';
import { RegistrationProps } from 'src/types/types';

type DataRequests = {
  [id: string]: {
    request: IotaRequest;
    response?: IotaResponse;
  };
};
const personalInfo: RegistrationProps = {
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



const queryid = 'b81b1052-6303-4ac0-9a72-646e642f60f0'
const configId = 'a1a88b50-795b-45d4-b29c-ce4d4d6e242d'

const RegistrationPage = () => {
  const [iotaSession, setIotaSession] = useState<Session>();
  const [dataRequests, setDataRequests] = useState<DataRequests>({});
  const [openMode, setOpenMode] = useState<OpenMode>(OpenMode.Popup);
  const [iotaIsInitializing, setIotaIsInitializing] = useState(false);
  const [queryStarted, setQueryStarted] = useState(false);
  const [correlationId, setCorrelationId] = useState<string | null>(null);
  const [personalInfoData, setPersonalInfoData] = useState<RegistrationProps>(personalInfo);

  useEffect(() => {
    if (correlationId) {
      console.log('dataRequests response', dataRequests[correlationId].response);
      const allCrdentialSubjectArray = dataRequests[correlationId]?.response?.vpToken.verifiableCredential.map((vc) => vc.credentialSubject) ?? [];
      console.log('allCrdentialSubjectArray', allCrdentialSubjectArray);
      const allCredentailSubject = Object.assign({}, ...allCrdentialSubjectArray);
      console.log('allCredentailSubject', allCredentailSubject);
      setPersonalInfoData(state => ({
        ...state,
        email: allCredentailSubject?.email ,
        gender: allCredentailSubject?.gender ,
        address: allCredentailSubject?.locality 
      }));
      console.log('personalInfoData', personalInfoData);
    }

  }, [dataRequests]);

  useEffect(() => {
    IotaSession();
  }, []);

  const IotaSession = async () => {
    try {
      if (iotaSession) {
        console.log("Iota session already exists");
        return iotaSession;
      }

      setIotaIsInitializing(true);
      const credentials = await getIotaCredentials(configId);
      const iotaSessionl = new Session({ credentials });
      await iotaSessionl.initialize();
      setIotaSession(iotaSessionl);
    } catch (error) {
      console.error("Error initializing Iota Session:", error);
    } finally {
      setIotaIsInitializing(false);
    }
  }
  async function getIotaCredentials(configurationId: string) {
    const response = await fetch(
      "/api/iota/start?" +
      new URLSearchParams({
        iotaConfigurationId: configurationId,
      }),
      {
        method: "GET",
      },
    );
    return (await response.json()) as IotaCredentials;
  }

  async function handleTDKShare(queryId: string) {
    if (!iotaSession) {
      throw new Error("IotaSession not initialized");

    }
    else {
      try {
        console.log(queryId, 'queryId');
        setQueryStarted(true);
        const request = await iotaSession.prepareRequest({ queryId });
        // setIsFormDisabled(false);
        // console.log(request, 'request');
        addNewDataRequest(request);
        request.openVault({ mode: openMode });
        setCorrelationId(request.correlationId)
        const response = await request.getResponse();
        updateDataRequestWithResponse(response);
        setQueryStarted(false);
      } catch (e) {
        console.error(e);
      } finally {
        setQueryStarted(false);
      }
    }
  }

  const addNewDataRequest = (request: IotaRequest) => {
    setDataRequests((prevRequests) => ({
      ...prevRequests,
      [request.correlationId]: { request },
    }));
  };
  const updateDataRequestWithResponse = (response: IotaResponse) => {
    setDataRequests((prevRequests) => ({
      ...prevRequests,
      [response.correlationId]: {
        ...prevRequests[response.correlationId],
        response,
      },
    }));
  };




  return (
    <>
      <S.ArrowBack />
      <S.PageContainer>
        {queryStarted && <LoadingModal title="Querying Vault" message="Please wait for a few seconds until we pull data from vault." />}
        <S.LeftContainer>

          <S.Title>Create an <span style={{ color: '#0058a3' }}>Smart Living Family</span> Profile</S.Title>
          <S.Subtitle>Already have an account? <S.Link href="/sign-in">Login</S.Link></S.Subtitle>
          <>
            <S.ImageMosaic>
              <S.ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_9.jpg")' }} />
              <S.ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_1.jpg")' }} />
              <S.ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_2.jpg")' }} />
              <S.ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_3.jpg")' }} />
            </S.ImageMosaic>
          </>
          <>
            <S.ImageMosaic>
              <S.ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_4.jpg")' }} />
              <S.ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_5.jpg")' }} />
              <S.ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_7.jpg")' }} />
              <S.ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_8.jpg")' }} />
              <S.ImageTile style={{ backgroundImage: 'url("https://in.accounts.ikea.com/resources/static/SIGNUP_IMAGE_6.jpg")' }} />
            </S.ImageMosaic>
          </>
        </S.LeftContainer>

        <S.RightContainer>
          <S.Subtitle>Become a member of Smart Family today. Did we mention it's free to join?
            <S.Link href="/details">Get the details.</S.Link>
          </S.Subtitle>
          <S.Form>
            <S.Label htmlFor="firstName">First name</S.Label>
            <S.Input type="text" id="firstName" name="firstName" required value={personalInfo.name} />

            <S.Label htmlFor="surname">Surname</S.Label>
            <S.Input type="text" id="surname" name="surname" required />

            <S.Label htmlFor="birthdate">Birthdate</S.Label>
            <S.Input type="text" id="birthdate" name="birthdate" placeholder="DD-MM-YYYY" required value={personalInfo.dob} />
            {/* <InfoIcon title="We require this field in order to best personalize communication & marketing material and understand our users better."> ℹ️ </InfoIcon> */}

            <S.Label htmlFor="gender">Gender</S.Label>
            <S.Select id="gender" name="gender" required value={personalInfoData.gender}>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </S.Select>
            <S.HelperText>We require this field in order to best personalize communication & marketing material and understand our users better.</S.HelperText>

            <S.Label htmlFor="postcode">Post code</S.Label>
            <S.Input type="text" id="postcode" name="postcode" required value={personalInfoData.postcode} />

            <S.Label htmlFor="store">Preferred store</S.Label>
            <S.Select id="store" name="store" required>
              <option value="">Select your preferred store</option>
              <option value="store1">Store 1</option>
              <option value="store2">Store 2</option>
              <option value="store3">Store 3</option>
            </S.Select>

            <S.Label htmlFor="mobile">Mobile</S.Label>
            <S.Input type="text" id="mobile" name="mobile" required value={personalInfo.phoneNumber} />
            <S.Label htmlFor="email">Email (Username)</S.Label>
            <S.Input id="email" name="email" required value={personalInfoData.email} type="text" />

            <S.CheckboxContainer>
              <S.MasterCheckboxLabel>
                <S.CheckboxInput type="checkbox" />
                <S.CheckboxText>I would like to be kept in the loop with the latest member offers, news, and handy tips from IKEA</S.CheckboxText>
              </S.MasterCheckboxLabel>
              <S.SlaveCheckboxLabel>
                <S.CheckboxInput type="checkbox" />
                <S.CheckboxText>Via email</S.CheckboxText>
              </S.SlaveCheckboxLabel>
              <S.SlaveCheckboxLabel>
                <S.CheckboxInput type="checkbox" />
                <S.CheckboxText>Via SMS</S.CheckboxText>
              </S.SlaveCheckboxLabel>
              <S.SlaveCheckboxLabel>
                <S.CheckboxInput type="checkbox" />
                <S.CheckboxText>Via direct mail</S.CheckboxText>
              </S.SlaveCheckboxLabel>
            </S.CheckboxContainer>
            <div style={{ marginTop: '2rem' }}>
              <S.Button variant='primary' onClick={() => { window.location.href = '/sign-in' }}>Submit</S.Button>
            </div>
          </S.Form>
        </S.RightContainer>
        <div style={{ marginTop: '40rem', marginLeft: '7rem', width: '20%', flexDirection: 'column' }}>
          <S.Button variant='primary' onClick={() => handleTDKShare(queryid)}>Fetch From Vault</S.Button>
        </div>
      </S.PageContainer>
    </>
  );
};



export default RegistrationPage;
