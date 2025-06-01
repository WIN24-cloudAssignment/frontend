import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

// Parts of the delete event functionality (confirmDelete dialog) were written with help from ChatGPT.
// The rest of the component structure follows the same pattern as my AddEventForm component.


const EventDetailsContent = ({ item }) => {
  const { id } = useParams()
  const navigate = useNavigate();

const handleDelete = async () => {
  const confirmDelete = window.confirm("Are you sure you want to delete this event?");
  if (!confirmDelete) return;

  try {
    const res = await fetch(`https://assignment-eventservice-eaesbsd8cydrgcfn.swedencentral-01.azurewebsites.net/api/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Delete Event failed:", errorText);
    } else {
      console.log("Event deleted successfully");
      navigate('/');
    }
  } catch (err) {
    console.error("Error deleting event:", err);
  }
};

  return (
    <div className="booking-wrapper">
      <div className="event-detail-card">
       
        <div className="event-banner">
           <div className='trash-flex'>
              <i className="fa-sharp fa-solid fa-trash" onClick={handleDelete}></i>
           </div>
          
          {/* Upload picture */}
        </div>

        <div className="event-info">
          <div className="event-flex">
            <p><i className="fa-regular fa-calendar"></i> {item.eventDate}</p>
            <p><i className="fa-solid fa-location-dot"></i> {item.location}</p>
          </div>

          <div className="event-price">
            <span className="label">Starts from</span>
            <span className="amount">$60</span>
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
