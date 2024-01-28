describe('Practice', () => {
    beforeEach(() => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard('Dropdowns')
    })
  
/*     it("Practice Example", function () {
      cy.get("#product_dropdown").select(2);
  
      cy.get(".react-dropdown-select-content").click();
  
      cy.get(`[aria-label="Delivery"]`).click();
  
      cy.visit("https://techglobal-training.netlify.app/frontend/project-3");
  
      cy.contains(".label", "Cabin Class").next().children().select("Business");
    }); */
  
    /**
     * Test Case: Validate Dropdowns Functionality on TechGlobal Training Page
     * Go to https://techglobal-training.com/frontend
     * Select the "Dropdowns" card
     * Select the "MacBook Pro 13" option from the "Product" dropdown.
     * Select the "Green" option from the "Color" dropdown.
     * Open the "Shipping" dropdown and click on the "Delivery" option.
     * Click on the "Submit" button.
     * Validate result message displays "Your Green MacBook Pro 13 will be delivered to you."
     */
  


    it.only('Practice Example 2', function () {
        const product = 'MacBook Pro 13'
        const color = 'Green'
        const shippingOption = 'Delivery'
        
    
        cy.get('#product_dropdown').select(product)
        cy.get('#color_dropdown').select(color)
        cy.get('div[aria-label="Dropdown select"]').click() 
        cy.get(`span[aria-label="${shippingOption}"]`).click()
        cy.get('#submit').click()
    
        if (shippingOption === 'Delivery') {
            cy.get('#result').should('have.text', `Your ${color} ${product} will be delivered to you.`)
        } else {
            cy.get('#result').should('have.text', `Your ${color} ${product} is ready to be picked up.`)
        }
    })
})