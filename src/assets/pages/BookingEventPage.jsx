import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'


//GLÖM INTE USE NAVIGATE FÖR ATT GÖRA EN REDIRECT

const BookingEventPage = () => {
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
   <div>
  <h1>Book Event - {event.title}</h1>
  <form onSubmit={handleSubmit} noValidate>
    <div>
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>

    <div>
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </div>

    <div>
      <label>E-mail</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div>
      <label>Street Name</label>
      <input
        type="text"
        name="streetName"
        value={formData.streetName}
        onChange={handleChange}
        required
      />
    </div>

    <div>
      <label>Postal Code</label>
      <input
        type="text"
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
        required
      />
    </div>

    <div>
      <label>City</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />
    </div>

    <button type="submit">Book Now</button>
  </form>
</div>

  )
}

export default BookingEventPage
