import pool from './database.js';
import eventsData from '../data/events.js';
import locationData from '../data/locations.js';

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      date VARCHAR(255) NOT NULL,
      time VARCHAR(255) NOT NULL,
      location_id SERIAL NOT NULL,
      image VARCHAR(255) NOT NULL
    );
    `
  try {
    const res = await pool.query(createTableQuery);
    console.log('🎉 Events table created successfully');
  } catch (err) {
    console.error('⚠️ Error creating table:', err);
  }
};

const seedEventsTable = async () => {
  await createEventsTable();

  const insertPromises = eventsData.map(event => {
    const insertQuery = {
      text: 'INSERT INTO events (title, date, time, location_id, image) VALUES ($1, $2, $3, $4, $5)',
      values: [
        event.title,
        event.date,
        event.time,
        event.location_id,
        event.image
      ]
    };
    return pool.query(insertQuery);
  });

  try {
    await Promise.all(insertPromises);
    console.log('✅ All events added successfully');
  } catch (err) {
    console.error('⚠️ error inserting events:', err);
  }
};

const createLocationsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS location;

    CREATE TABLE IF NOT EXISTS location (
      id SERIAL PRIMARY KEY,
      image VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      city VARCHAR(255) NOT NULL,
      state VARCHAR(255) NOT NULL,
      zip VARCHAR(255) NOT NULL
    );
    `
  try {
    const res = await pool.query(createTableQuery);
    console.log('🎉 Location table created successfully');
  } catch (err) {
    console.error('⚠️ Error creating table:', err);
  }
};

const seedLocationTable = async () => {
  await createLocationsTable();

  const insertPromises = locationData.map(location => {
    const insertQuery = {
      text: 'INSERT INTO location (image, name, address, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6)',
      values: [
        location.image,
        location.name,
        location.address,
        location.city,
        location.state,
        location.zip
      ]
    };
    return pool.query(insertQuery);
  });

  try {
    await Promise.all(insertPromises);
    console.log('✅ All locations added successfully');
  } catch (err) {
    console.error('⚠️ error inserting locations:', err);
  }
};

seedEventsTable();
seedLocationTable();