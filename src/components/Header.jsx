import { useEffect, useState } from 'react'

import { Nav } from './Nav'
import { NavMobile } from './NavMobile'
import logoImg from '../assets/img/logo.png'

export const Header = () => {
  const [bg, setBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setBg(true) : setBg(false)
    })
  }, [])

  return (
    <header
      className={`${
        bg && 'bg-white shadow-md py-4'
      } p-8 lg:px-0 w-full fixed z-10 transition-all duration-300`}>
      <div className='container mx-auto flex items-center justify-between'>
        <a href='home'>
          <img src={logoImg} alt='logo image' />
        </a>

        <Nav />

        <NavMobile />
      </div>
    </header>
  )
}
