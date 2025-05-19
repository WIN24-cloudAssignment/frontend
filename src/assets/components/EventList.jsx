import React, { useState, useEffect } from 'react';
import EventItem from './EventItem';

const EventList = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const res = await fetch("https://assignment-eventservice-eaesbsd8cydrgcfn.swedencentral-01.azurewebsites.net/api/Events");
      if (res.ok) {
        const response = await res.json();
        console.log('API response:', response);
        setEvents(response.result); // ✅ Här ligger listan
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
    <section id="events">
      {events.map(event => (
        <EventItem key={event.id} item={event} />
      ))}
    </section>
  );
};

export default EventList;

