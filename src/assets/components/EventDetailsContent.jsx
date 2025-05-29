import React from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetailsContent = ({ item }) => {
  const { id } = useParams()

  return (
    <div className="booking-wrapper">
      <div className="event-detail-card">
        <div className="event-banner">
          {/* Upload picture */}
        </div>

        <div className="event-info">
          <div className="event-flex">
            <p><i className="fa-regular fa-calendar"></i> {item.eventDate}</p>
            <p><i className="fa-solid fa-location-dot"></i> {item.location}</p>
          </div>

          <div className="event-price">
            <span className="label">Starts from</span>
            <span class="amount">$60</span>
          </div>

          <div className="event-description">
            <h5>About Event</h5>
            <p>{item.description}</p>
          </div>
        </div>
      </div>

      <Link to={`/events/booking/${id}`} className="nav-link">Book This Event →</Link>
    </div>
  )
}

export default EventDetailsContent
