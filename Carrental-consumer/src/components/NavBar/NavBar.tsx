import { FC, useEffect, useState } from 'react'
import * as S from './NavBar.styled'
import Box from '../common/Box/Box'
import Image from 'next/image'

import LogoAffinidi from 'public/images/logo-affinidi.svg'
import LogoReact from 'public/images/react.svg'

import { signOut, useSession } from 'next-auth/react'
import AirlinesTwoToneIcon from '@mui/icons-material/AirlinesTwoTone';


const NavBar: FC = () => {
  const [isSignInPage, setIsSignInPage] = useState(false)
  const [confirmLogOut, setConfirmLogOut] = useState(false)
  
  const { data: session } = useSession()
  const { email, image: profilePicture } = session?.user || {}

  useEffect(() => {
    if (window.location.href.includes('/sign-in')) {
      setIsSignInPage(true)
    } else {
      setIsSignInPage(false)
    }
  }, [])

  useEffect(() => {
    if (confirmLogOut) {
      const timeoutId = setTimeout(() => {
        setConfirmLogOut(false)
      }, 3000)

      return () => clearTimeout(timeoutId)
    }
  }, [confirmLogOut])

  async function handleLogOut() {
    if (!confirmLogOut) {
      setConfirmLogOut(true)
      return
    }

    await signOut()
  }


  return (
    <><S.Container
      justifyContent='space-between'
      alignItems='center'
      direction='row'
    >
      <S.Title onClick={() => window.location.href = '/'}>
        <div className="flex items-center justify-between">
          <div className='inline-flex items-center'>
            <AirlinesTwoToneIcon style={{ fontSize: '36px' }} />
            <span style={{ margin: "0.5rem" }}></span>
            <span className="ml-2">Wheels Rentals</span>
          </div>
        </div>
      </S.Title>

      {!isSignInPage && <>
        <S.NavigationContainer
          justifyContent='space-between'
          alignItems='flex-end'
          direction='row'
        >
          <S.NavTabs onClick={() => window.location.href = '/'}>Reservations</S.NavTabs>
          <S.NavTabs onClick={() => window.location.href = '/carrental'}>Special Offers</S.NavTabs>
          <S.NavTabs onClick={() => window.location.href = '/carrental'}>Product & Services</S.NavTabs>
          <S.NavTabs onClick={() => window.location.href = '/carrental'}>Chauffeur Drive</S.NavTabs>

        </S.NavigationContainer>

        <Box style={{ minWidth: 200 }} alignItems='end'>

          {!email && <Box
            justifyContent='end'
            alignItems='center'
            direction='row'
          >
            <S.Button variant='primary' onClick={() => { window.location.href = '/sign-in' } }>Log In</S.Button>
            <S.Button variant='secondary' onClick={() => { window.location.href = '/sign-in' } }>Sign Up</S.Button>
          </Box>}

          {email && <S.Account onClick={handleLogOut} direction='row' alignItems='center' justifyContent='end' gap={16}>
            {!confirmLogOut && <S.Avatar>
              <img src={profilePicture || "images/icon-person-filled.svg"} alt="user avatar"></img>
            </S.Avatar>}
            <S.Email>{confirmLogOut ? 'Log out' : (email || 'My Account')}</S.Email>
          </S.Account>}
        </Box>
      </>}
    </S.Container><S.Separator /></>
  )
}

export default NavBar
