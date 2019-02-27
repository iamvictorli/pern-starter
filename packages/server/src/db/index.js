import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.SSL === 'true' // Get rid if testing on local, or put false in .env
});

export default {
  query: (text, params) => pool.query(text, params),
  pool
};
