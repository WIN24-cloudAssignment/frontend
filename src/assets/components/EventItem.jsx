import React from 'react'
import { Link } from 'react-router-dom'

//Code from Chat GPT, to format date and time
const formatDate = (dateString) => {
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  };
  return new Date(dateString).toLocaleString('en-US', options);
};


const EventItem = ({item}) => {
  return (
   <Link to ={`/events/${item.id}`}>
      <div className="event-card">
      <div className="event-image">
        {/* Upload picture here */}
      </div>
      <div className="event-content">
        <span className="event-date">{formatDate(item.eventDate)}</span>
        <h5 className="event-title">{item.title}</h5>
        <span className="event-location">{item.location}</span>
        <span className="event-price">$60 </span>
      </div>
    </div>
    </Link>
  )
}

export default EventItem
