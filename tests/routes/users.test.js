const cheerio = require("cheerio");
const request = require("supertest");

const routes = require("../../server");

jest.mock("../../db", () => ({
  getUser: id => Promise.resolve({ id: 1, playername: "test user 2" }),
  getUsers: () =>
    Promise.resolve([
      { id: 1, playername: "test user 2" },
      { id: 2, playername: "test user 4" }
    ])
}));

describe("route tests", () => {
  it("get / gives a 200 status code", done => {
    // Arrange
    const expected = 200;

    // Act
    request(routes)
      .get("/")
      .end((err, res) => {
        const actual = res.status;
        // Assert
        expect(err).toBeNull();
        expect(actual).toBe(expected);
        done();
      });
  });

  it("get /start return start page", done => {
    // Arrange
    const expected = "Add More Users";

    // Act
    request(routes)
      .get("/start")
      .end((err, res) => {
        const $ = cheerio.load(res.text);

        const actual = $("#moreUserButton").text();
        // Assert
        expect(err).toBeNull();
        expect(actual).toContain(expected);
        done();
      });
  });
});
