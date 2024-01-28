/// <reference types="cypress"/>

describe('Keyboard & Mouse Actions', () => {

  
    it('Keyboard Actions', () => {
        cy.get('#register_button').trigger('mouseover')
    })

    it('Right Click, and Doouble Click', () => {
        
        cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
        cy.clickCard('Actions')
        cy.get('#click').should('be.visible').and('have.text', 'Click on me').click()
        cy.get('#click_result').should('have.text', 'You clicked on a button!')
        cy.get('#right-click').should('be.visible').and('have.text', 'Right-Click on me').rightclick()
        cy.get('#right_click_result').should('have.text', 'You right-clicked on a button!')
        cy.get('#double-click').should('be.visible').and('have.text', 'Double-Click on me').dblclick()
        cy.get('#double_click_result').should('have.text', 'You double-clicked on a button!')
    })

    it.only('Drag and Drop', () => {
        
        cy.visit(`${Cypress.env('SITE_URL')}/frontend`)
        cy.clickCard('Actions')
        cy.get('#drag_element').drag('#drop_element')
        cy.get('#drag_and_drop_result').should('have.text', 'An element dropped here!')
    })
})