


// cypress.config.js

describe('handle Drop Down', () => {

it('Auto suggest drop down ', () => {
       
    cy.visit("https://www.wikipedia.org/")
       
    cy.get('#searchInput').type('Delhi')
 
    cy.get('.suggestion-title').contains('Delhi University').click()
       
      
 
           
      })

    })
    
 