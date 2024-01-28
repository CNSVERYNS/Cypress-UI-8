/// <reference types="cypress"/>

describe('UI2', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend/project-3')
    })

    it('Test Case 01 - Validate the default Book your trip form', () => {
        const labels = ['Cabin Class', 'From', 'To', 'Depart', 'Return', 'Number of passengers', 'Passenger 1', 'BOOK']
        cy.get('.label').each(($label, index) => {
            cy.wrap($label).should('have.text', labels[index])
        })
    })
})

