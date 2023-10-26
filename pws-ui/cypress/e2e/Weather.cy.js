describe("Personal Weather Station", () => {
  it("front page can be opened", () => {
    cy.visit("http://localhost:8081");
    cy.contains("Login");
    cy.contains("HOME");
    cy.contains("Signup");
    cy.contains("ontact");
  });
});
