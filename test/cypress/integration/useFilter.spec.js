describe("Test use the filter", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000);
  });

  it("Should search a product and after use the filter", () => {
    cy.searchPlanet("as");
    cy.filterPlanetsUsingSelect("terrain", "jungle");
  });

  it("Should use the filter without search", () => {
    cy.filterPlanetsUsingSelect("terrain", "desert");
  });

  it("Should clear the filter", () => {
    cy.filterPlanetsUsingInput("population", "1000");
    cy.get(".Filter__button").click();
    cy.get("#population")
      .invoke("val")
      .then((inputValue) => {
        expect(inputValue).not.equal("1000");
      });
  });
});
