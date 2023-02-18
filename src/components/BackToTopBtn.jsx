import { useEffect, useState } from 'react'
import { BsChevronDoubleUp } from 'react-icons/bs'
import { animateScroll as scroll } from 'react-scroll'

export const BackToTopBtn = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false)
    })
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className='bg-primary-hover w-12 h-12 text-white rounded-full fixed right-10 bottom-20 cursor-pointer flex justify-center items-center transition-all'>
        <BsChevronDoubleUp className='w-6 h-6 font-bold' />
      </button>
    )
  )
}
