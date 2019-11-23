require("dotenv").config();

const app = require("../../app");
const supertest = require("supertest");

const request = supertest(app);

describe("This is a describe call", () => {  
    it("unmatched routes should return 404", async () => {
        const res = await request.get("/api/cheese");
        expect(res.status).toBe(404);
    })
})