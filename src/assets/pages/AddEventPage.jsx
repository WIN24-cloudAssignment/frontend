import React from 'react'
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddEventForm from '../components/AddEventForm';
import { Link } from 'react-router-dom';

const EventPage = () => {
  
  
  return (
   <div className='page-container'>
     <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        <Link to="/" className="nav-link">← Back to Events</Link>
        <AddEventForm />
      </main>
      <Footer />
    </div>
   </div>

  )
}

export default EventPage