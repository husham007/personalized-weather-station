describe("Logout", () => {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
    const user = {
      email: "dani@gmail.com",
      password: "123456",
    };
    cy.request("POST", `${Cypress.env("BACKEND")}/signup`, user);
  });

  it("logout Successfull", () => {
    cy.visit("");
    cy.contains("Login").click();
    cy.get("#email").type("dani@gmail.com");
    cy.get("#password").type("123456");
    cy.get("#Sign-in").click();
    cy.contains("Sign-in successful!");
    cy.get("#avatar").click();
    cy.get("#logout").click();
    cy.contains("Logout successful!");
  });
});
