
 
    // cypress.config.js
     
    describe('handle Drop Down', () => {

       it('Drop Down with select menu', () => {
       
      cy.visit("https://www.zoho.com/commerce/free-demo.html")
  
      cy.get('#zcf_address_country')
      .select('Italy')
      .should('have.value', 'Italy');
            
                
    })
          
     })
      