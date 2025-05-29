import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import EventDetailsContent from '../components/EventDetailsContent'
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EventDetailPage = () => {

  const {id} = useParams()

    const [event, setEvent] = useState({});
  
    const getEvents = async () => {
      try {
        const res = await fetch(`https://assignment-eventservice-eaesbsd8cydrgcfn.swedencentral-01.azurewebsites.net/api/events/${id}`);
        if (res.ok) {
          const response = await res.json();
          console.log('API response:', response);
          setEvent(response.result); 
        } else {
          console.error("Something went wrong...", res.status);
        }
      } catch (error) {
        console.error("Could not get event.", error);
      }
    };
  
    useEffect(() => {
      getEvents();
    }, []);

  return (
      <div className='page-container'>
          <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        {event?.id && <EventDetailsContent item={event} />}
      </main>
      <Footer />
    </div>
      </div>
  )
}

export default EventDetailPage
