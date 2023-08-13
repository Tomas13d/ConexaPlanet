import { getAll, getSingleOne } from "..";
import fetchData from "../fetchData";


describe("fetchData", () => {
  it("fetches get All data successfully", async () => {
    const result = await fetchData("/people");
    if ('data' in result && result.data) {
      const personData = result.data
      expect(personData).toHaveProperty("count");
      expect(personData).toHaveProperty("results");
      expect(Array.isArray(personData.results)).toBe(true);
    } else {
      throw new Error("invalid data");
    }
  });

  it("fetches singleOne data successfully", async () => {
    const result = await fetchData("/people/4");
    if ('data' in result && result.data) {
      const personData = result.data
      expect(personData).toHaveProperty("name");
      expect(personData).toHaveProperty("height");
      expect(personData).toHaveProperty("mass");
    } else {
      throw new Error("invalid data");
    }
  });

  it("handles 404 error", async () => {
    const result = await fetchData("/starships/8");
    expect(result).toEqual({
      error: "not-found",
      message: "Data not found",
    });
  });
});

describe("getAll function", () => {
  it("fetches and returns all data successfully", async () => {
    const data = await getAll("people");
    
    expect(data).toHaveProperty("count");
    expect(data).toHaveProperty("results");
    expect(Array.isArray(data.results)).toBe(true);
  });

  it("fetches and returns all diferent endpoints", async () => {
    const data = await getAll("starships");
    
    expect(data).toHaveProperty("count");
    expect(data).toHaveProperty("results");
    expect(Array.isArray(data.results)).toBe(true);
  });

  it("handles 404 error", async () => {
    const data = await getAll("peooople");
    expect(data).toEqual({
      error: "not-found",
      message: "Data not found",
    });
  });
});

describe("getSingleOne function", () => {
  it("fetches singleOne data successfully", async () => {
    const data = await getSingleOne("people", "4");

    expect(data).toHaveProperty("name");
    expect(data).toHaveProperty("height");
    expect(data).toHaveProperty("mass");
  });

  it("fetches and returns diferent endpoints", async () => {
    const data = await getSingleOne("starships", "3");
    
    expect(data).toHaveProperty("name");
    expect(data).toHaveProperty("model");
    expect(data).toHaveProperty("length");
  });

  it("handles 404 error", async () => {
    const data = await getSingleOne("starships", "8");

    expect(data).toEqual({
      error: "not-found",
      message: "Data not found",
    });
  });
});
