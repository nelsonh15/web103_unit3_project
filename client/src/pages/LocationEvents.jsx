import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import { getLocationById } from '../services/LocationsAPI'
import { getEventsById } from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({ index }) => {
  const [events, setEvents] = useState([]);
  const [location, setLocation] = useState([]);
  
  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEventsById(index);
      setEvents(eventsData);
    }
    fetchEvents();
  }, [])

  useEffect(() => {
    const fetchLocation = async () => {
      const locationData = await getLocationById(index);
      setLocation(locationData[0]);
    }
    fetchLocation();
  }, [])

  return (
    <div className='location-events'>
      <header>
        <div className='location-image'>
          <img src={location.image} />
        </div>

        <div className='location-info'>
          <h2>{location.name}</h2>
          <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
        </div>
      </header>

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

export default LocationEvents