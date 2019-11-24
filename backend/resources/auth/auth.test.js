require("dotenv").config();
const mongoose = require("mongoose");
const supertest = require("supertest");

const hash = require("../../util/hash");
const User = require("./user.model");
const app = require("../../app");
const request = supertest(app);

const user1 = {
  email: "dave@example.com",
  password: "password"
}

const existingUser = {
  email: "existing@example.com",
  password: "password"
}

beforeAll(async () => {
  await mongoose.connection.dropDatabase().catch(err => console.log(err));
  const hashedPassword = await hash(existingUser.password);
  await User.create({
    email: existingUser.email,
    password: hashedPassword
  }).catch(err => console.log(err));
})

xdescribe("/api/signup", () => { 
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
    const res1 = await request.post("/api/login").send({
      email: "some@email.com",
      password: ""
    });
    const res2 = await request.post("/api/login").send({
      email: "",
      password: "password"
    });
    expect(res1.status).toBe(400);
    expect(res2.status).toBe(400);
  });

  it("should return 400 and correct message if password is incorrect", async () => {
    const res = await request.post("/api/login").send({
      email: existingUser.email,
      password: "wrongpassword"
    });
    expect(res.status).toBe(400);
    expect(res.body.message).toBe("password incorrect")
  })

  it("Should return 400 if email is not signed up", async () => {
    const res = await request.post("/api/login").send({
      email: "notsignedup@email.com",
      password: "password"
    });
    expect(res.status).toBe(400);
  });

  // it("valid login request should return 200 and user object", async () => {
  //   const res = await request.post("/api/login").send(existingUser)
  //   expect(res.status).toBe(200);
  //   expect(res.body.email).toEqual(existingUser.email);
  // });

})