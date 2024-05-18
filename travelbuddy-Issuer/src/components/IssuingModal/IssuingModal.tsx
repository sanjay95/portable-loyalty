import { FC, useEffect, useState } from "react";
import "react-responsive-modal/styles.css";

import * as S from "./LoadingModal.styled";
import axios from "axios";
import { hostUrl } from "src/utils/env_public";
import { useSession } from "next-auth/react";
import { membership } from "src/utils";
import QrCodeGenerator from "../common/QrCode/QrCodeGenerator";


type ModalProps = {
  title: string
  message: string,
  issuanceType: membership
};



const IssuingModal: FC<ModalProps> = ({ title, message, issuanceType }) => {
  const [issuanceResponse, setIssuanceResponse] = useState<credentialIssuanceOffer>()

  //create state with defaults
  const [credinfo, setCredinfo] = useState<credentialsProps>({ ...defaults })
  const { data: session } = useSession()
  console.log('session', session)
  useEffect(() => {
    if (!session || !session.user) return
    setCredinfo((state) => ({ ...state, email: session.user?.email, name: session.user?.name, holderDid: session.user?.userId }))
  }, [session])

  useEffect(() => {

    let apiData = issuanceType == membership.Silver ? { ...silver, holderDid: credinfo.holderDid } : { ...platinum, holderDid: credinfo.holderDid };
    console.log('apiData', apiData)
    const StartIssue = async () => {
      const response = await axios(`${hostUrl}/api/clients/issuance-client`, {
        method: 'POST',
        data: apiData,
      })
      let dataResponse = response.data
      console.log('dataResponse', dataResponse)
      if (typeof dataResponse == 'string') {
        dataResponse = JSON.parse(dataResponse)
      }
      if (dataResponse.credentialOfferUri) {
        setIssuanceResponse(dataResponse)
      }
      console.log('issuanceResponse', issuanceResponse)
    };
    StartIssue()
  }, []);

  useEffect(() => {

    console.log('issuanceResponse', issuanceResponse);

  }, [issuanceResponse]);

  return (<S.Modal open={true} center>
    <S.ModalWrapper>
      {!issuanceResponse && <><S.Title>{title}...</S.Title><S.SubTitle>
        {message}
      </S.SubTitle></>}
      <QrCodeGenerator url={issuanceResponse?.credentialOfferUri} />
      

    </S.ModalWrapper>
  </S.Modal>)
};

export default IssuingModal;

type credentialIssuanceOffer ={
  credentialOfferUri:string
  issuanceId:string
  expiresIn:number
}
type credentialsProps = {
  // credtype: string
  // credtitle: string
  // email: string | null | undefined
  // name: string | null | undefined
  // creddate?: string
  // webinardate?: string
  // desc?: string
  // webinartitle?: string
  holderDid: string | null | undefined
}

const defaults: credentialsProps = {

  holderDid: '',
}
const silver = {
  tierLevel: 'Silver',
  frequentFlyerNumber: 'AITT6789JH',
  expiryDate: '2025-09-08',
  airline: 'New Space Airline',

}
const platinum = {
  tierLevel: 'Platinum',
  frequentFlyerNumber: 'AITT6789JH',
  expiryDate: '2025-09-08',
  airline: 'New Space Airline',
}

