import React, { useState, useEffect } from 'react'
import Event from '../components/Event';
import { loadAllEvents } from '../services/EventsAPI'
import '../css/Event.css'

function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const event = await loadAllEvents();
      setEvents(event);
    }
    fetchEvents();
  }, [])

  return (
    <div className='location-events'>
      <main>
        {
          events && events.length > 0 ? events.map((event, index) =>
            <Event
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
            />
          ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
        }
      </main>
    </div>
  )
}

export default Events