
import { Routes, Route } from 'react-router-dom';
import './App.css'
import EventPage from './assets/pages/EventPage';
import EventDetailPage from './assets/pages/EventDetailPage';
import BookingEventPage from './assets/pages/BookingEventPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route path="/events/booking/:id" element={<BookingEventPage />} />
      </Routes>
    </>
  )
}

export default App
