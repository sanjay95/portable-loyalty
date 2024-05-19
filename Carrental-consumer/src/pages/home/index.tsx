import { FC, useEffect, useState } from 'react'

import DebtIcon from 'public/images/debt-icon.svg'
import FinanceIcon from 'public/images/finance-icon.svg'
import EducationIcon from 'public/images/education-icon.svg'

import * as S from './index.styled'
import { useSession } from 'next-auth/react'
import WelcomeBanner from 'src/components/WelcomeBanner/WelcomeBanner'
import LandingPage from 'src/components/LandingPage/LandingPage'
import Tile from 'src/components/common/Tile/Tile'
import CarRental from '../carrental'

const Home: FC = () => {
  const { data: session } = useSession()
  const { userId, name } = session?.user || {}

  return (
    <S.Wrapper>
      {userId && <WelcomeBanner name={name} userId={userId} />}

      {/* <LandingPage /> */}
      <CarRental/>

       
    </S.Wrapper>
  )
}

export default Home

