Cypress.Commands.add("go_home", () => {
  cy.visit("/");
});

Cypress.Commands.add("submit_search", () => {
  cy.get(".search-grid")
    .find("button[type=submit]")
    .click();
});
