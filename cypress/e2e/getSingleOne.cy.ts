describe("getSingleOne function", () => {
   // testint single film and people request
  it("should fetch single people data successfully", () => {
    cy.intercept("GET", "/swAPI/people/1").as("getSingleData");
    const endpoint = "people";
    const id = "1";

    cy.visit("/persona/1");

    cy.wait("@getSingleData").then((interception) => {
      const requestUrl = interception.request.url;
      const expectedUrl = `https://us-central1-lemur-digital.cloudfunctions.net/swAPI/${endpoint}/${id}`;
      expect(requestUrl).to.equal(expectedUrl);

      const responseBody = interception.response?.body;
      cy.log(JSON.stringify(responseBody));
      expect(responseBody).to.have.property("name");
      expect(responseBody).to.have.property("height");
    });
  });

  it("should fetch single film data successfully", () => {
    cy.intercept("GET", "/swAPI/films/1").as("getSingleData");
    const endpoint = "films";
    const id = "1";

    cy.visit("/peliculas/1");

    cy.wait("@getSingleData").then((interception) => {
      const requestUrl = interception.request.url;
      const expectedUrl = `https://us-central1-lemur-digital.cloudfunctions.net/swAPI/${endpoint}/${id}`;
      expect(requestUrl).to.equal(expectedUrl);

      const responseBody = interception.response?.body;
      cy.log(JSON.stringify(responseBody));
      expect(responseBody).to.have.property("title");
      expect(responseBody).to.have.property("director");
    });
  });
});
