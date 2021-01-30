
Cypress.Commands.add("searchPlanet", (planetName) => {
    cy.visit("/");
    cy.get(".searchBar__input").type(planetName)
    cy.get(".searchBar__button").click();
    cy.wait(1000);
    cy.get(".TableItem").should("exist");
  });
  