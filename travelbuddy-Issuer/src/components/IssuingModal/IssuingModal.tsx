import { FC, useEffect, useState } from "react";
import "react-responsive-modal/styles.css";

import * as S from "./IssuingModal.styled";
import axios from "axios";
import { hostUrl } from "src/utils/env_public";
import { useSession } from "next-auth/react";
import { membership } from "src/utils";
import QrCodeGenerator from "../common/QrCode/QrCodeGenerator";
import { Button } from "@mui/material";

type ModalProps = {
  title: string;
  message: string;
  issuanceType: membership;
};

type credentialIssuanceOffer = {
  credentialOfferUri: string;
  issuanceId: string;
  expiresIn: number;
};

type credentialsProps = {
  email: string | null | undefined;
  holderDid: string | null | undefined;
};

const defaults: credentialsProps = {
  email: '',
  holderDid: '',
};

const silver = {
  tierLevel: 'Silver',
  frequentFlyerNumber: 'AITT6789JH',
  expiryDate: '2025-09-08',
  airline: 'New Space Airline',
};

const platinum = {
  tierLevel: 'Platinum',
  frequentFlyerNumber: 'AITT6789JH',
  expiryDate: '2025-09-08',
  airline: 'New Space Airline',
};

const IssuingModal: FC<ModalProps> = ({ title, message, issuanceType }) => {
  const [issuanceResponse, setIssuanceResponse] = useState<credentialIssuanceOffer | null>(null);

  // Create state with defaults
  const [credinfo, setCredinfo] = useState<credentialsProps>({ ...defaults });
  const { data: session } = useSession();
  console.log('session', session);

  useEffect(() => {
    if (!session || !session.user) return;
    setCredinfo((state) => ({
      ...state,
      email: session.user?.email,
      name: session.user?.name,
      holderDid: session.user?.userId
    }));
  }, [session]);

  useEffect(() => {
    if (!credinfo.holderDid) return;

    const apiData = issuanceType === membership.Silver
      ? { ...silver, holderDid: credinfo.holderDid }
      : { ...platinum, holderDid: credinfo.holderDid };

    console.log('apiData', apiData);

    const startIssue = async () => {
      try {
        const response = await axios.post(`${hostUrl}/api/clients/issuance-client`, apiData);
        let dataResponse = response.data;

        if (typeof dataResponse === 'string') {
          dataResponse = JSON.parse(dataResponse);
        }

        if (dataResponse.credentialOfferUri) {
          setIssuanceResponse(dataResponse);
        }

        console.log('issuanceResponse', dataResponse);
      } catch (error) {
        console.error('Error issuing credential', error);
      }
    };

    startIssue();
  }, [credinfo.holderDid, issuanceType]);

  useEffect(() => {
    console.log('issuanceResponse', issuanceResponse);
  }, [issuanceResponse]);

  return (
    <S.Modal open={true} center>
      <S.ModalWrapper>
        {!issuanceResponse ? (
          <>
            <S.Title>{title}...</S.Title>
            <S.SubTitle>{message}</S.SubTitle>
          </>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1, marginRight: '20px' }}>
                <p>Your vault registered with {credinfo.email} has been issued {membership[membership.Silver]} membership</p>
              </div>
              <div style={{ flex: 1 }}>
                <QrCodeGenerator url={issuanceResponse?.credentialOfferUri || ''} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button
                variant="contained"
                onClick={() => window.open('chrome-extension://fejpjjkbaklcdcibmkbmpanjbiihclon/dashboard.html', '_blank')}
                style={{ marginRight: '10px' }}
              >
                Claim
              </Button>
              <Button variant="contained" onClick={() => window.location.href = '/'}>Book Holiday</Button>
            </div>
          </div>
        )}
      </S.ModalWrapper>
    </S.Modal>
  );

};

export default IssuingModal;
