import express from 'express';

const router = express.Router();

// GET /api/libraries
// get all the libraries
router.get('/', (req, res) => {
  const db = req.app.get('db');

  db
    .getLibraries()
    .then((libraries) => {
      res.status(200).json({ libraries });
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

export default router;
