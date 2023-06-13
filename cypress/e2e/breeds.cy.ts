describe("breeds", () => {
  before(() => {
    cy.visit("/");

    cy.get("input[name=email]").type("test@test.com");
    cy.get("input[name=name]").type(`Test User{enter}`);

    cy.location("pathname").should("equal", "/");
  });

  beforeEach(() => {
    cy.visit("/");
  });

  it("shows the breeds", () => {
    cy.get('[data-cy="dog-card"]').should("be.visible");
  });
});
