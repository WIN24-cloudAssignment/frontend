import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const EventDetailPage = () => {

  const {id} = useParams()

    const [event, setEvent] = useState({});
  
    const getEvents = async () => {
      try {
        const res = await fetch(`https://assignment-eventservice-eaesbsd8cydrgcfn.swedencentral-01.azurewebsites.net/api/events/${id}`);
        if (res.ok) {
          const response = await res.json();
          console.log('API response:', response);
          setEvent(response.result); // ✅ Här ligger listan
        } else {
          console.error("Fel från API:", res.status);
        }
      } catch (error) {
        console.error("Kunde inte hämta event:", error);
      }
    };
  
    useEffect(() => {
      getEvents();
    }, []);

  return (
    <div className="event-details">
      <h1>{event.title}</h1>
      <Link to={`/events/booking/${id}`}>Book Event</Link>
    </div>
  )
}

export default EventDetailPage
