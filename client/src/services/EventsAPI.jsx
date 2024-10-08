export const loadAllEvents = async () => {
  try {
    const response = await fetch('/events');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading events:', error);
  }
};

export const getEventsById = async (id) => {
  try {
    const response = await fetch(`/events/${id}`);
    const data = await response.json()
    return data;
  }
  catch (error) {
    console.error(`Error loading events with location id: ${id}`, error);
  }
}

