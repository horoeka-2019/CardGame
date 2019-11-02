const testEnv = require("./test-environment");
const db = require("../../db");

let testDb = null;

beforeEach(() => {
  testDb = testEnv.getTestDb();
  return testEnv.initialise(testDb);
});

afterEach(() => testEnv.cleanup(testDb));

describe("DB Users table tests", () => {
  it.only("getUsers gets all users", () => {
    // Arrange
    const expected = 4;

    // Act
    return db.getUsers(testDb).then(users => {
      const actual = users.length;
      // Assert
      expect(actual).toBe(expected);
    });
  });
});
