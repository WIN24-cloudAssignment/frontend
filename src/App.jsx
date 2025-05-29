
import { Routes, Route } from 'react-router-dom';
import './assets/css/style.css'
import EventPage from './assets/pages/EventPage';
import EventDetailPage from './assets/pages/EventDetailPage';
import BookingEventPage from './assets/pages/BookingEventPage';
import AddEventPage from './assets/pages/AddEventPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route path="/events/booking/:id" element={<BookingEventPage />} />
        <Route path="/events/add" element={<AddEventPage />} />
      </Routes>
    </>
  )
}

export default App
