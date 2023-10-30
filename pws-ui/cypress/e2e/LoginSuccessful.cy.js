describe("Login", () => {
  beforeEach(function () {
    cy.visit("");
    cy.contains("Login").click();
  });

  it("login Successfull", () => {
    cy.visit("");
    cy.contains("Login").click();
    cy.get("#email").type("dani@gmail.com");
    cy.get("#password").type("123456");
    cy.get("#Sign-in").click();
    cy.contains("Sign-in successful!");
  });
});
