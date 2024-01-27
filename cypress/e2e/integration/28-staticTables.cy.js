import TablesPage from 'C:/Users/admin/OneDrive/Desktop/cypress-ui-8-master/cypress/pages/TablesPage'

describe('Static Tables', () => {
    

    beforeEach(() => {
    cy.visit(`${Cypress.env("SITE_URL")}/frontend`);

    cy.clickCard("Tables");


    cy.fixture('header').then(function header(){
        cy.wrap(header.headers).as('headersOnThePage')
    })

    });

    

    it('Verify the headers of the table', function(){
        const headersOnThePage = this.headersOnThePage;
        const headers1 = TablesPage.getHeader()

        headers1.each(($header, index) => {
            expect($header.text()).to.equal(headersOnThePage[index])
           })

    })

})






