describe("Login Fails", () => {
  beforeEach(function () {
    cy.visit("");
    cy.contains("Login").click();
  });

  it("login fails with wrong password", () => {
    cy.visit("");
    cy.contains("Login").click();
    cy.get("#email").type("dani@gmail.com");
    cy.get("#password").type("1234567");
    cy.get("#Sign-in").click();
    cy.contains("Sign-in failed. Please check your credentials");
    cy.get("html").should("not.contain", "Sign-up successful!");
  });
});
