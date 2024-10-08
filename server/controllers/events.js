import pool from '../config/database.js';

export const getEvents = async (req, res) => {
  try {
    const selectQuery = `SELECT * FROM events ORDER BY id ASC`
    const results = await pool.query(selectQuery);
    if (results) {
      res.status(200).json(results.rows)
    }
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}

export const getEventsById = async (req, res) => {
  try {
    const { id } = req.params;
    const selectQuery = `SELECT title, date, time, image FROM events WHERE location_id=${id} ORDER BY id ASC`
    const results = await pool.query(selectQuery);
    if (results) {
      res.status(200).json(results.rows)
    }
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}
