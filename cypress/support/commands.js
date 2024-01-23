// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add("clickCard", (link) => {
  cy.get(".cards").contains(link).click();
});

Cypress.Commands.add("haveText", (id, value) => {
  cy.get(id).should('have.text', value);
});

Cypress.Commands.add("haveText", {prevSubject: true}, (subject, attr, value) => {
  cy.wrap(subject).should('have.attr', attr).and('eq', value)
  });
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
