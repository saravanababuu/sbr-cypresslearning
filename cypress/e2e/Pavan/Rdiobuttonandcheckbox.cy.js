

describe('Check UI elements', () => {
 
     
  //  it('Checking Radio buttons', () => {
     
     //   cy.visit("https://itera-qa.azurewebsites.net/home/automation")
      //  cy.get("input#male").should('be.visible')
      //  cy.get("input#female").should('be.visible')

   
  //  })


    it('Checking Radio buttons', () => {
     
        cy.visit("https://testautomationpractice.blogspot.com/")

        //Visibilty of radio buttons 

          cy.get("input#male").should('be.visible')
          cy.get("input#female").should('be.visible')

       // cy.get('label[for="male"]').should('be.visible')
      //  cy.get('label[for="female"]').should('be.visible')
        
        //selecting radio buttons 

      // cy.get('label[for="male"]').check().should('be.checked')
      //  cy.get('input[type="radio"][id="male"]').check().should('be.checked')

      cy.get('input#male').check().should('be.checked')
      cy.get('input#female').should('not.be.checked')

      cy.get('input#female').check().should('be.checked')
      cy.get('input#male').should('not.be.checked')
      

   
    })
        
    it('Checking checkboxes', () => {
     
      cy.visit("https://testautomationpractice.blogspot.com/")

      //Visibilty of the element

      //  cy.get("input#sunday").should('be.visible')
         
    // Selecting single checkbox - sunday

  //  cy.get("input#sunday").check().should('be.checked')
   
   // unselecting checkbox

   //cy.get("input#sunday").uncheck().should('not.be.checked')

   // selecting all the checkboxes 

    //   cy.get("input.form-check-input[type = 'checkbox']").check().should('be.checked')
  
     //  cy.get("input.form-check-input[type = 'checkbox']").uncheck().should('not.be.checked')

     // select the firstcheck box out of al options
    
     cy.get("input.form-check-input[type = 'checkbox']").first().check().should('be.checked')
     cy.get("input.form-check-input[type = 'checkbox']").last().check().should('be.checked')
       
 
  })





    })