describe("Signup", () => {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);
    const user = {
      email: "dani@gmail.com",
      password: "123456",
    };
    cy.request("POST", `${Cypress.env("BACKEND")}/signup`, user);
    cy.visit("");
    cy.contains("Signup").click();
  });

  it("New user created", () => {
    cy.get("#userName").type("dani2");
    cy.get("#email").type("dani2@gmail.com");
    cy.get("#password").type("123456");
    cy.get("#signup").click();
    cy.contains("Sign-up successful!");
  });
});
