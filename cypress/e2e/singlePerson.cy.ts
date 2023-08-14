describe("VerMas Component", () => {
    it("should display single person information when loaded", () => {
        const mockSinglePerson = {
          name: "Luke Skywalker",
          birth_year: "19BBY",
          mass: "77",
          gender: "male",
          image: "/static/img/luke_skywalker.jpg"
        };
    
        const mockQuery = { id: "1" }; 
        cy.intercept("GET", "/swAPI/people/1", { body: mockSinglePerson }).as("getSinglePerson");
    
        cy.visit(`/persona/${mockQuery.id}`);
        cy.wait("@getSinglePerson");
    
        cy.contains(mockSinglePerson.name).should("exist");
        cy.contains(`Nacido el: ${mockSinglePerson.birth_year}`).should("exist");
        cy.contains(`Masa: ${mockSinglePerson.mass}`).should("exist");
        cy.contains(`Genero: ${mockSinglePerson.gender}`).should("exist");
      });
  });