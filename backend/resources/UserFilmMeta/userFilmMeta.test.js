require("dotenv").config();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const hash = require("../../util/hash");

const User = require("../auth/user.model");
const UserFilmMeta = require("./userFilmMeta.model");
const app = require("../../app");
const supertest = require("supertest");

const request = supertest(app);

const existingUser = {
  email: "existing@example.com",
  password: "password"
};

let user;
let token;

const catchErrors = res => {
  if (res.status !== 200) console.log("\n\nerrors in response: \n\n", res.body);
};

beforeAll(async () => {
  try {
    await mongoose.connection.dropDatabase();
  } catch (err) {
    console.log(err);
  }
  const hashedPassword = await hash(existingUser.password);
  user = await User.create({
    email: existingUser.email,
    password: hashedPassword
  }).catch(err => console.log(err));
  token = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.APP_SECRET
  );
});

describe("Resource - userFilmMeta", () => {
  it("wrong method should return 400", async () => {
    const res = await request.patch("/api/user-film-meta");
    expect(res.status).toBe(400);
  });

  it("should return 401 not authorised if no valid jwt", async () => {
    const res = await request.get("/api/user-film-meta");
    expect(res.status).toBe(401);
    expect(res.body.errors[0]).toBe("not authorised");
  });

  it("Should return 200 with doc if valid request", async () => {
    const res = await request
      .get("/api/user-film-meta")
      .set("Cookie", [`token=${token}`])
      .send({
        filmId: "12345"
      });
    catchErrors(res);
    expect(res.status).toBe(200);
  });

  // create user
  // update user
  // delete user
});

describe("Misc tests", () => {
  // !!! This should be moved at some point as it has nothing to do with the user resource
  it("routes that don't exist should return 404", async () => {
    const cheeseRes = await request.get("/api/cheese");
    expect(cheeseRes.status).toBe(404);
    const userRes = await request.get("/user");
    expect(userRes.status).toBe(404);
  });
});
