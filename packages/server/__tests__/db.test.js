import db from '../src/db';

describe('Postgres Querying', () => {
  test('Get all libraries', async () => {
    const client = await db.pool.connect();
    const { rows } = await client.query('SELECT * FROM libraries;');
    expect(rows).toEqual([
      { id: 1, libraryname: 'Express' },
      { id: 2, libraryname: 'pg' },
      { id: 3, libraryname: 'React' },
      { id: 4, libraryname: 'Redux' },
      { id: 5, libraryname: 'Redux Thunk' },
      { id: 6, libraryname: 'React Router Dom' },
      { id: 7, libraryname: 'ESLint' },
      { id: 8, libraryname: 'Babel' }
    ]);
    client.release();
    await db.pool.end();
  });
});
