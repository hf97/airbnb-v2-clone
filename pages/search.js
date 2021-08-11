import Header from "../components/Header";
import Footer from "../components/Footer";

function Search() {
  return (
    <div>
      <Header />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ Stays for 5 number of guests</p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in Mars</h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='search__buttons'>Cancellation Flexibility</p>
            <p className='search__buttons'>Type of Place</p>
            <p className='search__buttons'>Price</p>
            <p className='search__buttons'>Rooms and Beds</p>
            <p className='search__buttons'>More Filters</p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default Search
