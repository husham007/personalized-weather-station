describe("Personal Weather Station App", () => {
  beforeEach(function () {
    cy.request("POST", `${Cypress.env("BACKEND")}/testing/reset`);

    const user = {
      email: "dani@gmail.com",
      password: "123456",
    };
    cy.request("POST", `${Cypress.env("BACKEND")}/signup`, user);
    // cy.visit("");
  });

  // it("front page can be opened", () => {
  //   cy.visit("");
  //   cy.contains("Login");
  //   cy.contains("HOME");
  //   cy.contains("Signup");
  //   cy.contains("contact");
  // });

  // it("login form can be opened", () => {
  //   cy.visit("http://localhost:8081");
  //   cy.contains("Login").click();
  // });

  // it("login Successfull", () => {
  //   cy.visit("");
  //   cy.contains("Login").click();
  //   cy.get("#email").type("dani@gmail.com");
  //   cy.get("#password").type("123456");
  //   cy.get("#Sign-in").click();
  //   cy.contains("Sign-in successful!");
  // });

  it("New user created", () => {
    cy.visit("");
    cy.contains("Signup").click();
    cy.get("#userName").type("dani2");
    cy.get("#email").type("dani2@gmail.com");
    cy.get("#password").type("123456");
    cy.get("#signup").click();
    cy.contains("Sign-up successful!");
  });
});
