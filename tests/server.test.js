const request = require('supertest')
const cheerio = require('cheerio')

const server = require('../server')

jest.mock('../../db/users', () => ({
  getUser: (id) => Promise.resolve(
    { id: 1, playername: 'test user 2' }
  ),
  getUsers: () => Promise.resolve([
    { id: 1, playername: 'test user 2' },
    { id: 2, playername: 'test user 4' }
  ])
}))

describe('/ route tests', () => {
  it('gives a 200 status code', (done) => {
    // Arrange
    const expected = 200

    // Act
    request(server)
      .get('/')
      .end((err, res) => {
        const actual = res.status

        // Assert
        expect(err).toBeNull()
        expect(actual).toBe(expected)
        done()
      })
  })
})
