import express from 'express';

import db from '../db';

const router = express.Router();

// GET /api/libraries
// get all the libraries
router.get('/', async (req, res) => {
  const client = await db.pool.connect();
  const { rows } = await client.query('SELECT * FROM libraries;');
  res.status(200).json({ libraries: rows });
  client.release();

  // for testing routing. DONT USE TESTING AS AN ENVIRONMENT VARIABLE
  if (process.env.TESTING) db.pool.end();
});

export default router;
