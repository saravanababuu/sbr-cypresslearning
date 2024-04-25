
///<reference types = "cypress" />
// cypress.config.js

describe('handle Drop Down', () => {

it('Drop Down without select ', () => {
       
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

      
    cy.get('#select2-billing_country-container').click()
       
    cy.get('.select2-search__field').type('Japan').type('{enter}')

    cy.get('#select2-billing_country-container')
   .should('have.text' , 'Japan')
         

           
  })

})
      