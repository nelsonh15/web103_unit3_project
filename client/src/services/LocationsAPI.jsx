export const getAllLocations = async () => {
  try {
    const response = await fetch('/locations');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading events:', error);
  }
};

export const getLocationById = async (id) => {
  try {
    const response = await fetch(`/locations/${id}`);
    const data = await response.json()
    return data;
  }
  catch (error) {
    console.error(`Error loading location id: ${id}`, error);
  }
}