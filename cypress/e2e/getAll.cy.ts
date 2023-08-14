
describe("getAll function", () => {
  // testint every request
  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "/swAPI/*").as("getAllData");
  });

  it("should fetch data successfully", () => {
    cy.wait("@getAllData").then((interception) => {
      const responseBody = interception.response?.body;
      expect(responseBody).to.have.property("results");
      expect(responseBody.results).to.have.length(10)
    });
  });
});
