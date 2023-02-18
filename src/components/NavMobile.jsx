import { useState } from 'react'
import { Link } from 'react-scroll'
import { IoClose } from 'react-icons/io5'
import { HiOutlineBars3 } from 'react-icons/hi2'

import { navigation } from '../data'

export const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='lg:hidden relative z-20'>
      <HiOutlineBars3
        size={35}
        onClick={() => setIsOpen(true)}
        className='cursor-pointer'
      />

      <ul
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } bg-primary fixed top-0 w-full h-screen text-white transition-all flex flex-col justify-center items-center space-y-8 text-lg`}>
        <IoClose
          onClick={() => setIsOpen(false)}
          className='absolute top-6 left-6 cursor-pointer'
          size={35}
        />

        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link
                onClick={() => setIsOpen(false)}
                to={item.href}
                activeClass='active'
                spy={true}
                offset={-200}
                className='hover:text-accent-hover transition-all duration-300 cursor-pointer'>
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
