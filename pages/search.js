import { useRouter } from 'next/router';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuests } = router.query;


  // TODO error when doesnt have date
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;


  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numberOfGuests}`} />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ Stays - { range } - for { numberOfGuests } guests</p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in { location }</h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='search__buttons'>Cancellation Flexibility</p>
            <p className='search__buttons'>Type of Place</p>
            <p className='search__buttons'>Price</p>
            <p className='search__buttons'>Rooms and Beds</p>
            <p className='search__buttons'>More Filters</p>
          </div>

          <div className='flex flex-col'>
            { searchResults.map(({ img, location, title, description, star, price, total }) => (
              <InfoCard
                key={img}
                img={img}
                location={location}
                title={title}
                description={description}
                star={star}
                price={price}
                total={total}
              />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default Search

// context to get the parameters
// export async function getServerSideProps(context) {

// no context because of dummy api
export async function getServerSideProps() {
  const searchResults = await fetch('https://jsonkeeper.com/b/0DU7')
    .then((response) => response.json());

    return {
      props: {
        searchResults,
      }
    }
}