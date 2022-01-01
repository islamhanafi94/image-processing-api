import supertest from 'supertest';
import app from '../../main';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('Returns status code 400 when calling the API without proper query params', async done => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
    done();
  });
  it('Returns status code 200 when calling the API properly', async done => {
    const response = await request.get(
      '/api/images?fileName=fjord&height=100&width=100',
    );
    expect(response.status).toBe(200);
    done();
  });
});
