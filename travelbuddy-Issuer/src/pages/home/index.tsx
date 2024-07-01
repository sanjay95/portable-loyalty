import { FC } from 'react'

import * as S from './index.styled'
import { useSession } from 'next-auth/react'
import LandingPage from 'src/components/LandingPage/LandingPage'
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

