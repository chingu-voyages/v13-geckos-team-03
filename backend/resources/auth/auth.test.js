require("dotenv").config();
const mongoose = require("mongoose");
const supertest = require("supertest");

const User = require("./user.model");
const app = require("../../app");
const request = supertest(app);

const user1 = {
  email: "dave@example.com",
  password: "password"
}

beforeAll(async () => {
  await mongoose.connection.dropDatabase()
})

describe("/api/signup", () => { 
  it("wrong method should return 400", async () => {
    const res = await request.get("/api/signup");
    expect(res.status).toBe(400);
  });

  it("valid signup request should return 200", async () => {
      const res = await request.post("/api/signup").send(user1);
      expect(res.status).toBe(200);
  });

  it("valid signup request should create user", async () => {
    const user1Doc = await User.findOne({email: user1.email});
    expect(user1Doc.email).toEqual(user1.email);
});

  it("password should be hashed", async () => {
    const user1Doc = await User.findOne({email: user1.email});
    expect(user1Doc.email).toEqual(user1.email);
    expect(user1Doc.password).not.toEqual(user1.password);
  });

  it("should reject if email already signed up", async () => {
    const res = await request.post("/api/signup").send(user1);
    expect(res.status).toBe(400);
  })
})

describe("/api/login", () => {
  it("wrong method should return 400", async () => {
    const res = await request.get("/api/signup");
    expect(res.status).toBe(400);
  });

  it("Should return 400 if email or password are missing", async () => {
    const res = await request.post("/api/login").send({
      email: "some@email.com",
      password: ""
    });
    expect(res.status).toBe(400);
  });

  it("should return 200 if email and password are present", async () => {
    const res = await request.post("/api/login").send(user1);
    expect(res.status).toBe(200);
  })
})