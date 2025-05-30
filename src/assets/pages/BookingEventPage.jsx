import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookEventForm from '../components/BookEventForm'
import { Link } from 'react-router-dom'


  const BookingEventPage = () => {

  return (
   <div>
   <div className='page-container'>
     <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        <Link to="/" className="nav-link">← Back to Event Details</Link>
        <BookEventForm />
      </main>
      <Footer />
    </div>
   </div>
</div>

  )
}

export default BookingEventPage
