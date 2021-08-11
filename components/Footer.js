function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 justify-items-center gap-y-10 px-32 pt-14 pb-14 bg-gray-100 text-gray-600'>
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>About</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
      </div>
    
      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>About</h5>
        <p>Airnbn Plus</p>
        <p>Airbnb Luxe</p>
        <p>HANF</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It's a pretty awesom clone</p>
      </div>

      <div className='space-y-4 text-xs text-gray-800'>
        <h5 className='font-bold'>SUPPORT</h5>
        <p>Help Centre</p>
        <p>Nextjs</p>
        <p>Tailwind css</p>
      </div>
    </div>
  )
}

export default Footer
