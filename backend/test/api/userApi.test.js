const request = require("supertest");
const app = require("../../app");
const mongoose = require("mongoose");
const User = require("../../models/user");

let testEmail = "testuser@example.com";

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/test-db-api");
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe("User API Endpoints", () => {
  // Create user
  beforeEach(async () => {
    await User.create({
      fname: "Test",
      lname: "User",
      dob: "2000-01-01",
      email: testEmail,
      password: await require("bcryptjs").hash("123456", 10),
      gender: "other"
    });
  });

  afterEach(async () => {
    await User.deleteMany();
  });

  // ✅ GET USER
  it("GET /api/auth/getuser should return user by email", async () => {
    const res = await request(app)
      .get(`/api/auth/getuser?email=${testEmail}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.user.email).toBe(testEmail);
  });

  // ✅ UPDATE USER
  it("PUT /api/auth/updateuser should update user details", async () => {
    const res = await request(app)
      .put(`/api/auth/updateuser?email=${testEmail}`)
      .send({ fname: "Updated" });

    expect(res.statusCode).toBe(200);
    expect(res.body.user.fname).toBe("Updated");
  });

  // ✅ DELETE USER
  it("DELETE /api/auth/deleteuser should delete user by email", async () => {
    const res = await request(app)
      .delete(`/api/auth/deleteuser?email=${testEmail}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/deleted successfully/i);
  });
});
