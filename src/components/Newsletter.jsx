export const Newsletter = () => {
  return (
    <section className='bg-accent pt-14 pb-[74px]'>
      <div className='container mx-auto px-8 text-center'>
        <h3 className='from-primary text-4xl font-extrabold leading-[1.2] text-white mb-3'>
          Subscriber to our newsletter
        </h3>
        <p className='mb-10 text-white text-sm'>
          Be first to get the latest news about us.
        </p>
        <form className='max-w-[600px] mx-auto flex flex-col lg:flex-row'>
          <input
            className='form-control mb-4'
            placeholder='Your email address'
            type='email'
          />
          <button className='btn bg-primary hover:bg-primary-hover lg:max-w-[150px] lg:ml-4'>
            Join
          </button>
        </form>
      </div>
    </section>
  )
}
