import { Appointment } from './Appointment'
import { Header } from '../components/Header'
import lawyerImg from '../assets/img/lawyer_banner.png'

export const Banner = () => {
  return (
    <section
      id='home'
      className='lg:h-full lg:max-h-800 bg-gradient-to-t from-[#F8F3EC] to-[#E0C8AC]'>
      <Header />

      <div className='container mx-auto h-full lg:flex pt-32'>
        <div className='text-center mx-auto h-full lg:text-left px-8 md:p-0'>
          <h1 className='font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]'>
            You Problem <br /> <span className='text-accent'>Our Goal.</span>
          </h1>
          <p className='max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            quidem veritatis eos, facilis voluptatum consequuntur quae doloribus
            numquam ipsa at error magni nobis, eius debitis deleniti
            repellendus, ab eligendi sed?
          </p>

          <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0'>
            <Appointment />
          </div>
        </div>
        <div className='hidden flex-1 lg:flex lg:flex-col items-end'>
          <img src={lawyerImg} alt='image' />
        </div>
      </div>
    </section>
  )
}
