/// <reference types="cypress"/>

describe("Alerts", () => {
  beforeEach(() => {
    // This will fail if the page doesn't send text/html with 200 status
    cy.visit(`${Cypress.env("SITE_URL")}/frontend`);
    cy.clickCard("Alerts");
  });

  it("Handling the Warning Alert", () => {


    cy.on('window:alert', (str) => {
        expect(str).to.equal('You are on TechGlobal Training application.')
    })

    cy.get('#warning_alert').click()

    cy.get('#action').should('have.text', 'You accepted warning by clicking OK.')
  });


  it("Handling the Confirmation Alerts", (str) => {

    cy.get('#confirmation_alert').click()
    cy.on('window:confirm', (str) => {
      expect(str).to.equal("Would you like to stay on TechGlobal Training application?")
      return false
      
      
    })
      cy.get('#action').should('have.text', 'You rejected the alert by clicking Cancel.')
  });
      it.only("Handling the Prompt Alerts", (str) => {
        
        cy.window().then((win) => {
          cy.stub(win, 'prompt').returns('TechGlobal Batch 8')
        })
        cy.window().then((win) => {
          cy.stub(win, 'prompt').callsFake(message)
          console.log(message)
          return "TechGlobal Batch 8"
        })
        cy.get('#prompt_alert').click()
        cy.get('#action').should('have.text', 'You entered "TechGlobal Batch 8" in the alert and clicked OK.')
  });

  
});

  