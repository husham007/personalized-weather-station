Cypress.Commands.add("login", ({ username, password }) => {
  cy.request("POST", `${Cypress.env("BACKEND")}/signin`, {
    username,
    password,
  }).then(({ body }) => {
    localStorage.setItem("loggedNoteappUser", JSON.stringify(body));
    cy.visit("http://localhost:8081");
  });
});
