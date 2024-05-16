import { FC, useState } from "react";
import "react-responsive-modal/styles.css";

import * as S from "./Index.styled";
import { useRouter } from "next/router";
import MilestoneIndicator from "src/components/MilestoneIndicator/Index"
import { Button } from "@mui/material";

type ModalProps = {
  // error: string
  // errorDescription?: string
  closeCallback?: string
};
const milestones = {
  Silver: 50,
  Gold: 500,
  Platinum: 5000,
  Titanium: 10000,
};

const progress = 7000;

const ClaimModal: FC<ModalProps> = ({ closeCallback }) => {
  const { push } = useRouter();
  const [open, setOpen] = useState(true);
  const [claimInititated, setClaimIntiated]= useState(false);
  const handleClaimButton = () => {
    setClaimIntiated(true);
    alert('claimed')
  }

  async function onCloseModal() {
    setOpen(false);
    if (closeCallback)
      push(closeCallback);
  }

  return <S.Modal open={open} onClose={onCloseModal} center>
    <S.ModalWrapper>
      <S.Title>Claim your reward.</S.Title>
      
     {!claimInititated && <MilestoneIndicator progress={progress} milestones={milestones} handleClaimButton={handleClaimButton} />} 
      
    </S.ModalWrapper>
  </S.Modal>
};

export default ClaimModal;
