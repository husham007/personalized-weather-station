Cypress.Commands.add("login", ({ email, password }) => {
  cy.request("POST", `${Cypress.env("BACKEND")}/signin`, {
    email,
    password,
  }).then(({ body }) => {
    localStorage.setItem("loggedNoteappUser", JSON.stringify(body));
    cy.visit("http://localhost:8081");
  });
});

Cypress.Commands.add("signup", ({ username, email, password }) => {
  cy.request("POST", `${Cypress.env("BACKEND")}/signup`, {
    username,
    email,
    password,
  });
});
