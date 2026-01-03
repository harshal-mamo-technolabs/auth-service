import app from "./app.js";
import { calculateDiscount } from "./config/utils.js";
import request from "supertest";

describe("App", () => {
  it("should validate the discount calculation", () => {
    const discount = calculateDiscount(100, 10);
    expect(discount).toBe(10);
  });

  it("should return 200 status code", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
  });
});
