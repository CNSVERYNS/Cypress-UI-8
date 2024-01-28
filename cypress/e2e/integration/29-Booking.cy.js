let myquestion = 'Hello how are you?'


describe('Booking', () => {
    it('Book', () =>{
        cy.visit('https://chat.openai.com/')
        cy.get('#prompt-textarea').type(`${myquestion}{enter}`)
        cy.get('.Cw1rxd.google-symbols.G47vBd:first').click()
        cy.get('.tactile-searchbox-input:second').type('3817 W Granville Ave, Chicago, IL 60659{enter}')
        
    })
})


