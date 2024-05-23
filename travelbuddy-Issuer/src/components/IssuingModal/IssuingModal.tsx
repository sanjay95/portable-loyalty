import { FC, useEffect, useState } from "react";
import "react-responsive-modal/styles.css";

import * as S from "./IssuingModal.styled";
import axios from "axios";
import { hostUrl } from "src/utils/env_public";
import { useSession } from "next-auth/react";
import { membership } from "src/utils";
import QrCodeGenerator from "../common/QrCode/QrCodeGenerator";
import { Button, Collapse, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from "next/router";

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
  airline: 'Ascent Airline',
};

const platinum = {
  tierLevel: 'Platinum',
  frequentFlyerNumber: 'AITT6789JH',
  expiryDate: '2025-09-08',
  airline: 'Ascent Airline',
};

const IssuingModal: FC<ModalProps> = ({ title, message, issuanceType }) => {
  const [issuanceResponse, setIssuanceResponse] = useState<credentialIssuanceOffer | null>(null);
  const [credinfo, setCredinfo] = useState<credentialsProps>({ ...defaults });
  const [showUrl, setShowUrl] = useState(false);
  const [open, setOpen] = useState(true);
  const { push } = useRouter();


  async function onCloseModal() {
    setOpen(false);
    push('/');
  }

  const { data: session } = useSession();
  console.log('session', session);

  useEffect(() => {
    if (!session || !session.user) return;
    setCredinfo((state) => ({
      ...state,
      email: session.user?.email,
      name: session.user?.name,
      holderDid: session.user?.userId,
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
    <S.Modal open={open} onClose={onCloseModal} center>
      <S.ModalWrapper>
        {!issuanceResponse ? (
          <>
            <S.Title>{title}...</S.Title>
            <S.SubTitle>{message}</S.SubTitle>
          </>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <p>
                {issuanceType === membership.Silver ? 'Your vault registered with' : 'your membership registered with'}{' '}
                   <Typography sx={{ fontWeight: 'bold' }}>{credinfo.email}</Typography> has been{' '}
                  {issuanceType === membership.Silver ? 'issued' : 'upgraded to'}{' '}
                  <Typography sx={{ fontWeight: 'bold' }}>{membership[issuanceType]}</Typography> membership
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <QrCodeGenerator url={issuanceResponse?.credentialOfferUri || ''} />
              </div>
            </div>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <IconButton onClick={() => setShowUrl(!showUrl)} aria-expanded={showUrl}>
                <ExpandMoreIcon />
              </IconButton>
              <Collapse in={showUrl}>
                <p>{issuanceResponse?.credentialOfferUri}</p>
              </Collapse>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button
                variant="contained"
                onClick={() => window.open('chrome-extension://fejpjjkbaklcdcibmkbmpanjbiihclon/dashboard.html', '_blank')}
                style={{ marginRight: '10px' }}
              >
                Save to Vault
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
