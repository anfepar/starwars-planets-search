describe("Test order displayed data", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Sort data in ascending order", () => {
    cy.get(".TableHead").contains("Nombre").click({ force: true });
    cy.get("tbody > :nth-child(1) > :nth-child(1)")
      .contains("Alderaan")
      .should("exist");
  });
  it("Sort data in descending order", () => {

    cy.get(".TableHead").contains("Nombre").click({ force: true });
    cy.get(".TableHead").contains("Nombre").click({ force: true });
    cy.get("tbody > :nth-child(1) > :nth-child(1)")
      .contains("Yavin IV")
      .should("exist");
  });
});
