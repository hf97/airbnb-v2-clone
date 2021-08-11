import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel='icon' href='/airbnb-icon.png' />
      </Head>

      <Header />

      <Hero />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard key={img} img={img} location={location} distance={distance} />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          key='1'
          img='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb'
          buttonText='Get Inspired'
        />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://jsonkeeper.com/b/501Z')
    .then((response) => response.json());

  const cardsData = await fetch('https://jsonkeeper.com/b/2BOQ')
    .then((response) => response.json())
  
  return {
    props: {
      exploreData,
      cardsData,
    }
  }
}