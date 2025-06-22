const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../../app");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("POST /api/auth/signup", () => {
  it("should create a new user", async () => {
    const res = await request(app)
      .post("/api/auth/signup")
      .send({
        fname: "Test",
        lname: "User",
        email: "test@example.com",
        password: "123456",
        dob: "1999-01-01",
        gender: "male",
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("user");
  });
});
