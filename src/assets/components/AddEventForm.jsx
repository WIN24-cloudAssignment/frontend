import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEventForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    eventDate: '',
    location: '',
    description: ''
  });

 const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({...prev, [name]: value }))
      }

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('https://assignment-eventservice-eaesbsd8cydrgcfn.swedencentral-01.azurewebsites.net/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!res.ok) {
      console.error("Event creation failed");
    } else {
      console.log("Event created successfully");
      navigate('/');
    }
  } catch (err) {
    console.error("Error submitting event", err);
  }
};

  return (
          <div className="center-content">
            <div className="card">
              <h1 className="text-center mb-1">Add Event</h1>

              <form className="form" onSubmit={handleSubmit} noValidate>
                <div id="upload-trigger" className="image-preview-container project-image">
                  <img id="image-preview" src="#" className="hide" />
                  <div id="image-preview-icon-container" className="circle circle-gray">
                    <i id="image-preview-icon" className="fa-duotone fa-solid fa-camera"></i>
                  </div>
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="title">Title</label>
                  <input 
                    name="title" 
                    type="text" 
                    className="form-input" 
                    value={formData.title}
                    onChange={handleChange}
                    id="title" 
                    required
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="eventDate">Event Date</label>
                  <input 
                    name="eventDate" 
                    type="datetime-local" 
                    className="form-input" 
                    value={formData.eventDate}
                    onChange={handleChange}
                    id="eventDate" 
                    required
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="location">Location</label>
                  <input 
                    name="location" 
                    type="text" 
                    className="form-input" 
                    value={formData.location}
                    onChange={handleChange}
                    id="location" 
                    required
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label" htmlFor="description">Description</label>
                  <textarea 
                    name="description"
                    className="form-input text-area" 
                    value={formData.description}
                    onChange={handleChange}
                    id="description" 
                    required
                    >
                  </textarea>
                </div>

                <button type='submit' className="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
  )
}

export default AddEventForm
