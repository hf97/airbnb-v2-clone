import Image from 'next/image';

function Hero() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-{700px]">
      <Image
        src='https://a0.muscache.com/im/pictures/e09893fc-1d02-49b2-befa-c4be7a57ed18.jpg?im_q=highq&im_w=1200'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg'>Not sure where to go? Perfect.</p>

        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button>
      </div>
    </div>
  )
}

export default Hero
