import express from "express";
import request from "supertest";
import mainRouter from "../index";

describe("Main Router", () => {
  const app = express();
  app.use("/", mainRouter);
  describe("getAll endoint", () => {
    it("returns all data for valid endpoints", async () => {
      const validEndpoints = "people";
      const response = await request(app).get(`/${validEndpoints}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("count");
      expect(response.body).toHaveProperty("results");
      expect(Array.isArray(response.body.results)).toBe(true);
    });

    it("handles invalid endpoints", async () => {
      const invalidEndpoint = "invalidEndpoint";
      const response = await request(app).get(`/${invalidEndpoint}`);

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "invalid-endpoint",
        message: "Invalid Star Wars endpoint",
      });
    });
  });

  describe("singleOne endpoint", () => {
    const app = express();
    app.use("/", mainRouter);

    it("returns singleOne data for valid endpoints and IDs", async () => {
      const validEndpoints = "people";
      const validId = "4";
      const response = await request(app).get(`/${validEndpoints}/${validId}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("height");
      expect(response.body).toHaveProperty("mass");
    });

    it("handles invalid endpoints", async () => {
      const invalidEndpoint = "invalidEndpoint";
      const validId = "4";

      const response = await request(app).get(`/${invalidEndpoint}/${validId}`);

      expect(response.status).toBe(400);
      expect(response.body).toEqual({
        error: "invalid-endpoint",
        message: "Invalid Star Wars endpoint",
      });
    });
  });
});
