/// <reference types="cypress"/>

describe('Login page test', () => {
    beforeEach(() => {
      cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
      cy.clickCard('Project - Login Function')
    })
  const loginPage = new LoginPage()

    it('Login without POM', {tags: '@smoke'},  function() {
  
      loginPage.userLogin(this.username, this.password)
      loginPage.getSuccesMessage().should('be.visible')
      loginPage.getTechGlobalLogo()
    })
})