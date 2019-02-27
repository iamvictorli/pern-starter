import request from 'supertest';
import app from '../../src/index';

describe('Libraries Route', () => {
  test('Responds with all the libraries', done => {
    request(app)
      .get('/api/libraries')
      .expect('Content-Type', /json/)
      .expect(200, {
        libraries: [
          { id: 1, libraryname: 'Express' },
          { id: 2, libraryname: 'pg' },
          { id: 3, libraryname: 'React' },
          { id: 4, libraryname: 'Redux' },
          { id: 5, libraryname: 'Redux Thunk' },
          { id: 6, libraryname: 'React Router Dom' },
          { id: 7, libraryname: 'ESLint' },
          { id: 8, libraryname: 'Babel' },
          { id: 9, libraryname: 'Jest' },
          { id: 10, libraryname: 'Supertest' },
          { id: 11, libraryname: 'Enzyme' }
        ]
      })
      .end(done);
  });
});
