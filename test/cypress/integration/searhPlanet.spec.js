describe("Test search a planet with searcher", () => {
    beforeEach(() => {
      cy.fixture("planet.json").as("planetData");
      cy.visit("/");
    });
  
    it("Should search a product", () => {
      cy.get("@planetData").then((productData) => {
        cy.searchPlanet(productData.name);
      });
    });
  });
  