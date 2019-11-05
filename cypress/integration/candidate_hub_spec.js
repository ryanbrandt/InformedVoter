describe("Candidate Hub", () => {
  before(function() {
    cy.go_home();
    cy.submit_search();
  });

  it("Routes to candidate hub for selected candidate", () => {
    cy.get(".result-row")
      .contains("753, JO")
      .find(".fa")
      .click();
    cy.get(".expanded-row-active")
      .find("a:contains(See financials and more)")
      .click();
    cy.get(".candidate-header").should("contain", "753, JO");
  });
});
