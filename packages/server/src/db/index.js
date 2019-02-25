import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export default {
  query: (text, params) => pool.query(text, params),
  pool
};
