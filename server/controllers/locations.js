import pool from '../config/database.js';

export const getLocations = async (req, res) => {
  try {
    const selectQuery = `SELECT * FROM location ORDER BY id ASC`
    const results = await pool.query(selectQuery);
    if (results) {
      res.status(200).json(results.rows);
    } 
    else {
      res.status(404).json({ error: 'No locations found' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const selectQuery = `SELECT * FROM location WHERE id=${id} ORDER BY id ASC`
    const results = await pool.query(selectQuery);
    if (results) {
      res.status(200).json(results.rows)
    }
  }
  catch (error) {
    res.status(409).json({ error: error.message })
  }
}