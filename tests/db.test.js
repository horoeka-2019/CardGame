const testEnv = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

describe('DB Users table tests', () => {
  it('getUsers gets all users', () => {
    // Arrange
    const expected = 3

    // Act
    return db.getUsers(testDb)
      .then(users => {
        console.log(users)
        const actual = users.length
        // Assert
        expect(actual).toBe(expected)
      })
      // .catch(err => expect(err).toBeNull())
  })
})

// test('getUsers gets all players', () => {
//   // One for each letter of the alphabet!
//   const expected = 15
//   return db.getUsers(testDb)
//     .then(players => {
//       const actual = players.length
//       expect(actual).toBe(expected)
//     })
//     .catch(err => expect(err).toBeNull())
//})

// test('getUser gets a single user', () => {
//   const expected = 'test user 1'
//   return db.getUser(99901, testDb)
//     .then(user => {
//       const actual = user.name
//       expect(actual).toBe(expected)
//     })
//     .catch(err => expect(err).toBeNull())
// })