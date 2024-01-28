/// <reference types="cypress"/>

describe('Timeouts', () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env('SITE_URL')}/frontend`, {timeout: 100000})
      cy.clickCard('Waits')
    })
  
    it('Explicit and Inline Timeouts', () => {
      cy.get('#red').click()
      cy.get('.Box_c_box__0aavl', {timeout: 1000000}).should('be.visible')
    })
  })