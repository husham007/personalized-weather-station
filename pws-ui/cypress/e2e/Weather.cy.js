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

  it("login form can be opened", () => {
    cy.visit("http://localhost:8081");
    cy.contains("Login").click();
  });

  
});
