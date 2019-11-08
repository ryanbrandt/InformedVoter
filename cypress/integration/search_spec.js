describe("Search", () => {
  before(function() {
    cy.go_home();
  });

  function assertSearchDetailContains(value) {
    cy.get(".search-status-open").should("contain", value);
  }

  function removeSearchParam(paramVal) {
    cy.get(".status-badge")
      .contains(paramVal)
      .find("a")
      .click();
  }

  it("Displays active search parameters", () => {
    cy.get(".search-grid")
      .find("input[type=text]")
      .type("bernie sanders");
    assertSearchDetailContains("bernie sanders");

    cy.get(".dropdown:eq(0)").click();
    cy.get("#DEM").click();
    assertSearchDetailContains("Democrat");

    cy.get(".dropdown:eq(1)").click();
    cy.get("#P").click();
    assertSearchDetailContains("President");

    cy.get(".dropdown:eq(2)").click();
    cy.get("#C").click();
    assertSearchDetailContains("Current");
  });

  it("Removes search parameters", () => {
    removeSearchParam("President");
    cy.get(".search-status-open").should("not.contain", "President");
  });

  it("Completes a search", () => {
    cy.submit_search();
    cy.get(".result-row:eq(0)").should("contain", "SANDERS, BERNARD");
  });

  it("Toggles a result row", () => {
    cy.get(".fa")
      .get(".fa-plus")
      .click();
    cy.get(".expanded-row-active").should("contain", "Go To Candidate Hub");
    cy.get(".fa")
      .get(".fa-minus")
      .click();
  });

  it("Paginates results", () => {
    removeSearchParam("bernie sanders");
    removeSearchParam("Democrat");
    removeSearchParam("Current");
    cy.submit_search();
    cy.get(".results-table")
      .find(".pagination-detail")
      .should("be.visible");
  });

  // improve me!
  it("Scrolls through pages", () => {
    cy.get(".pagination-detail")
      .find("li")
      .eq(2)
      .click();
    cy.wait(2000);
    cy.get(".result-row:eq(0)").should("not.contain", "753, JO");
  });
});
