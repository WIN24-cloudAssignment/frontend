import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookEventForm = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [event, setEvent] = useState({})
  const [formData, setFormData] = useState({
      eventId: id, 
      firstName: '', 
      lastName: '', 
      email: '', 
      streetName: '', 
      postalCode: '', 
      city: ''
  })

      const getEvent = async () => {
        try {
          const res = await fetch(`https://assignment-eventservice-eaesbsd8cydrgcfn.swedencentral-01.azurewebsites.net/api/events/${id}`);
          if (res.ok) {
            const response = await res.json();
            setEvent(response.result);
          } else {
            console.error("Something went wrong...", res.status);
          }
        } catch (error) {
          console.error("Could not get event:", error);
        }
      };

      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({...prev, [name]: value }))
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const res = await fetch('https://assignment-bookingservice-hpfyfha2c8ctfve5.swedencentral-01.azurewebsites.net/api/bookings',
                  {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                  });
        
                  if (!res.ok) {
                    console.error("Booking failed");
                  } else {
                    console.log("Booking successful");
                    navigate('/')
                  }
                } catch (err) {
                  console.error("Error submitting booking", err);
                }
            }
            
              useEffect(() => {
                getEvent();
              }, []);

  return (
   <div className="center-content">
      <div className="card">
        <h1 className="text-center mb-1">Book Event - {event.title}</h1>

        <form className="form" onSubmit={handleSubmit} noValidate>
          <div className="mb-1">
            <label className="form-label" htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="form-input"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-1">
            <label className="form-label" htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-1">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-1">
            <label className="form-label" htmlFor="streetName">Street Name</label>
            <input
              id="streetName"
              name="streetName"
              type="text"
              className="form-input"
              value={formData.streetName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-1">
            <label className="form-label" htmlFor="postalCode">Postal Code</label>
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              className="form-input"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-1">
            <label className="form-label" htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              className="form-input"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Book Now</button>
        </form>
      </div>
    </div>
  )
}

export default BookEventForm

