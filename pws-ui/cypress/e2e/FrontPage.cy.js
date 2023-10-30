describe("front page", () => {
  it("front page can be opened", () => {
    cy.visit("");
    cy.contains("Login");
    cy.contains("HOME");
    cy.contains("Signup");
    cy.contains("contact");
  });
});
