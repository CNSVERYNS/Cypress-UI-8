/// <reference types="cypress"/>

describe("Login page test", () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
      cy.clickCard("Project - Login Function");
    });
  
    it("Login without POM", () => {
  
      cy.get("#username").type("TechGlobal");
    
      cy.get("#password").type("Test1234");
  
      cy.get("#login_btn").click();
  
      cy.get("#success_lgn").should("be.visible");
    });
})