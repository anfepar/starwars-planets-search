Cypress.Commands.add("searchPlanet", (planetName) => {
  cy.visit("/");
  cy.get(".searchBar__input").type(planetName);
  cy.get(".searchBar__button").click();
  cy.wait(1000);
  cy.get(".TableItem").should("exist");
});

Cypress.Commands.add("filterPlanetsUsingSelect", (key, value) => {
  cy.get(`#${key}`).select(value);
  cy.get("tbody").contains(value).as("filteredElement");
  cy.get("@filteredElement").then((filteredElement) => {
    expect(filteredElement).to.exist;
  });
});

Cypress.Commands.add("filterPlanetsUsingInput", (key, value) => {
  cy.get(`#${key}`).type(value);
  cy.get("tbody").contains(value).as("filteredElement");
  cy.get("@filteredElement").then((filteredElement) => {
    expect(filteredElement).to.exist;
  });
});
