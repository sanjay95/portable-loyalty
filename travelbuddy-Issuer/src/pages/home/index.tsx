import { FC, useEffect, useState } from 'react'

import DebtIcon from 'public/images/debt-icon.svg'
import FinanceIcon from 'public/images/finance-icon.svg'
import EducationIcon from 'public/images/education-icon.svg'

import * as S from './index.styled'
import { useSession } from 'next-auth/react'
import WelcomeBanner from 'src/components/WelcomeBanner/WelcomeBanner'
import LandingPage from 'src/components/LandingPage/LandingPage'
import Tile from 'src/components/common/Tile/Tile'
import HorizontalOffers from 'src/components/ScrollingOffers'

const Home: FC = () => {
  const { data: session } = useSession()
  const { userId, name } = session?.user || {}

  return (
    <S.Wrapper>
      {/* {userId && <WelcomeBanner name={name} userId={userId} />} */}
      <HorizontalOffers offers={[{ text: 'Summer savings are here! Enjoy discounted fares on your summer getaway' },
        { text: 'Get 10% off on your next booking with us' },
        { text: 'Book now and get a chance to win a free stay at a 5-star hotel'}
      ]}>

      </HorizontalOffers>
      <LandingPage />


    </S.Wrapper>
  )
}

export default Home

