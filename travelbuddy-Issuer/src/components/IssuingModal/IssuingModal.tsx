import { FC, useEffect, useState } from "react";
import "react-responsive-modal/styles.css";

import * as S from "./LoadingModal.styled";
import axios from "axios";
import { hostUrl } from "src/utils/env_public";
import { useSession } from "next-auth/react";

type ModalProps = {
  title: string
  message: string,
  issuanceType: string
};



const IssuingModal: FC<ModalProps> = ({ title, message, issuanceType }) => {
  const [issuanceResponse, setIssuanceResponse] = useState()

  //create state with defaults
  const [credinfo, setCredinfo] = useState<credentialsProps>({ ...defaults })
  const { data: session } = useSession()
  console.log('session', session)
  useEffect(() => {
    if (!session || !session.user) return
    setCredinfo((state) => ({ ...state, email: session.user?.email, name: session.user?.name, holderDid: session.user?.userId }))
  }, [session])

  useEffect(() => {
    const apiData = {
      email: credinfo.email,
      name: credinfo.name,
      credtype: credinfo.credtype,
      credtitle: credinfo.credtitle,
      webinardate: credinfo.webinardate,
      desc: credinfo.desc,
      webinartitle: credinfo.webinartitle,
      holderDid: credinfo.holderDid,
    }
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

  return (<S.Modal open={true} center>
    <S.ModalWrapper>
      <S.Title>{title}...</S.Title>
      <S.SubTitle>
        {message}
      </S.SubTitle>
    </S.ModalWrapper>
  </S.Modal>)
};

export default IssuingModal;

type credentialsProps = {
  credtype: string
  credtitle: string
  email: string | null | undefined
  name: string | null | undefined
  creddate?: string
  webinardate?: string
  desc?: string
  webinartitle?: string
  holderDid: string | null | undefined
}

const defaults: credentialsProps = {
  credtype: 'AFFINIDI DEVELOPER WEBINAR SERIES',
  credtitle: 'Certificate of Attendance',
  email: '',
  name: '',
  creddate: new Date().toISOString(),
  webinardate: '25th April 2024',
  desc: 'At Affinidi, we believe in the power of collaboration & innovation. Thank you for diving into the world of digital trust, decentralised identity, and revolutionary technologies that are shaping the future of identity management. Reclaim Your Data. Reclaim Your Identity. Reclaim Your Self.',
  webinartitle: 'Revolutions Identity Management in the New Data Economy',
  holderDid: '',
}