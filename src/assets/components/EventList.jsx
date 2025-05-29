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
        setEvents(response.result); 
      } else {
        console.error("Something went wrong...", res.status);
      }
    } catch (error) {
      console.error("Could not get event:", error);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="content-wrapper">
      {events.map(event => (
        <EventItem key={event.id} item={event} />
      ))}
    </div>
  );
};

export default EventList;

