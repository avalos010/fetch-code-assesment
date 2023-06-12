describe.only("breeds", () => {
  before(() => {
    cy.visit("/");

    cy.get("input[name=email]").type("test@test.com");
    cy.get("input[name=name]").type(`Test User{enter}`);

    cy.location("pathname").should("equal", "/");
  });

  it("shows the breeds", () => {
    cy.visit("/");
    cy.get('[data-cy="dog-card"]').should("be.visible");
  });
});
