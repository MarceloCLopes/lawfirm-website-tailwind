import { team } from '../data'

export const Team = () => {
  return (
    <section id='team' className='section'>
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-4'>
          Our Attourneys
        </h2>
        <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-16'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae
          quas expedita est autem, similique officia ad accusantium porro nobis
          commodi neque doloremque fugiat distinctio numquam? Officiis doloribus
          nemo laborum.
        </p>

        <div className='lg:grid lg:grid-cols-3 lg:gap-x-7'>
          {team.map((item, index) => {
            const { image, name, position, description } = item

            return (
              <div key={index} className='text-center lg:text-left mb-12'>
                <img src={image} alt={name} className='mx-auto lg:mx-0 mb-6' />
                <h4 className='text-2xl mb-2 from-primary font-bold'>{name}</h4>
                <p className='text-sm uppercase tracking-[0.3px] mb-4 opacity-80'>
                  {position}
                </p>
                <p className='max-w-[332px] lg:max-w-[350px] mx-auto lg:mx-0'>
                  {description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
