describe("breeds", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get("input[name=email]").type("test@test.com");
    cy.get("input[name=name]").type(`Test User{enter}`);

    cy.location("pathname").should("equal", "/");
  });

  it("shows the breeds", () => {
    cy.get('[data-cy="dog-card"]').should("be.visible");
  });

  it("breed filters being applied show up as chips", () => {
    selectBreedFromFilters();
    cy.get('[data-cy="Airedale-chip"]').should("be.visible");
  });

  it("breed filters being applied show up on the URL", () => {
    selectBreedFromFilters();
    cy.url().should("include", "breed=Airedale");
  });
});

function selectBreedFromFilters() {
  cy.get('[data-cy="filter-icon"]', { timeout: 3000 }).click();
  cy.get('[ data-cy="Breeds-accordion"]').click();
  cy.get('[type="checkbox"]').check("Airedale");
}
