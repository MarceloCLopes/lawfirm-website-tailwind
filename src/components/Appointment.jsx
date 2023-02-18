export const Appointment = () => {
  return (
    <div className='bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto'>
      <h3 className='text-white text-[28px] font-bold tracking-[0.3px] text-center'>
        Get an appointment
      </h3>
      <div className='w-[54px] h-[3px] bg-white my-6 mx-auto' />
      <div className='space-y-[24px]'>
        <input type='text' className='form-control' placeholder='Full name' />
        <input type='tel' className='form-control' placeholder='Phone number' />
        <input
          type='email'
          className='form-control'
          placeholder='Email address'
        />
        <textarea
          className='resize-none w-full h-[132px] outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary'
          placeholder='Your message'
        />
        <button className='btn btn-primary bg-primary transition-all'>
          Send message
        </button>
      </div>
    </div>
  )
}
