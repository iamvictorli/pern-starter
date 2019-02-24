import express from 'express';

import db from '../db';

const router = express.Router();

// GET /api/libraries
// get all the libraries
router.get('/', async (req, res) => {
  const { rows } = await db.query('SELECT * FROM libraries;');
  res.status(200).json({ libraries: rows });
});

export default router;
