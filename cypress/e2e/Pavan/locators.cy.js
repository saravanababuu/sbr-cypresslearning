const { describe } = require("mocha");

describe('csslocators', () => {
 
      
    it('Css Locators', () => {
     
      cy.visit("http://www.automationpractice.pl/index.php")
  
    //  cy.get("#search_query_top").type("T-shirts")     //id tag is optional    
      
    //  cy.get(".search_query").type("T-shirts")    //class tag is optional

    // cy.get("[name='search_query']").type("T-shirts")    //Attribute tag is optional

    cy.get("input.search_query[name='search_query']").type("T-shirts") //tag class attribute

      cy.get(" [name = 'submit_search']").click()

      cy.get(".lighter").contains("T-shirts")   //assertions

    cy.x



    });
    
    })