import { FC, useEffect, useState } from 'react'

import { nanoid } from 'nanoid'
import { hostUrl } from 'src/utils/env_public'
import { useRouter } from 'next/router'

import ErrorModal from 'src/components/common/ErrorModal/ErrorModal'
import EmailVcModal from 'src/components/EmailVcModal/EmailVcModal'

import { useVerifyVpMutation } from 'src/hooks/verifier/useVerifyVpMutation'

import * as S from './index.styled'
import { pxToRem } from 'src/utils'
import BenefitTiles from 'src/components/BenefitTiles'


const Newsletter: FC = () => {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.TileWrapper direction='column'>
        <S.TileHeader>Say hi to Smart Family</S.TileHeader>
        <span style={{marginTop:'5rem'}}>
        For the tech enthusiasts, the design dreamers, and everyone creating their ideal space – Smart Living is your one-stop shop. It's free to join and unlocks exclusive member deals, early access to new arrivals, and more
      </span>
      </S.TileWrapper>
      <div style={{ alignItems:'center', justifyContent:'center', marginTop:'5rem'}}>
          <a href="/registration" style={{display:'flex', alignItems:'center', marginRight:'2rem'}}>
            <img src="/images/Smart-Family-store.png" alt="Smart Living Gift Card" style={{marginRight:'1rem',width:1250, height:650}} />
          </a>
      </div>

<S.Button variant='primary' onClick={() => { window.location.href = '/sign-in' }}>Already a member? Log in</S.Button> 

    <div style={{  fontWeight: 600,  fontSize: pxToRem(28), marginTop: pxToRem(65), marginBottom: pxToRem(8)}}>
      Benefits you will love
     </div>
     <span> Because you deserve more.</span>

     <BenefitTiles />
    </S.Wrapper>
  )
}

export default Newsletter
