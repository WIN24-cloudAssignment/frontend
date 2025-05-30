import React from 'react'
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventList from '../components/EventList'
import { Link } from 'react-router-dom';


const EventPage = () => {
  
  
  return (
    
   <div className='page-container'>
     <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        <Link to="/events/add" className="nav-link active">Add Event</Link>
        <EventList />
      </main>
      <Footer />
    </div>
   </div>


  )
}

export default EventPage
