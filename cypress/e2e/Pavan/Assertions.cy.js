

describe('Assertions demo', () => {
 
    
  
    it('Implicit Assertions', () => {
     
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  
      // should and 

     // cy.url().should('include', 'orangehrmlive.com')
      //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     // cy.url().should('contain', 'orangehrmlive.com')

      //cy.url().should('include', 'orangehrmlive.com')
      //.should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      //.should('contain', 'orangehrmlive.com')


      cy.url().should('include', 'orangehrmlive.com')
      .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('contain', 'orangehrmlive.com')
      .and('not.contain', 'greenhrmlive.com')

      cy.title().should('include','Orange')
      .and('eq', "OrangeHRM")
      .and('contain', "HRM")

     // cy.get('.orangehrm-login-branding > img').should('be.visible')
    //  cy.get('.orangehrm-login-branding > img').should('be.exist')

      
      cy.get('.orangehrm-login-branding > img').should('be.visible')  // logo visible or not 
      .and('exist')  // logo exist or not 

      cy.xpath("//a").should('have.length' ,'5')   // To identify No of links present 

      cy.get("input[placeholder='Username']").type("Admin") // provide value to inbox

      cy.get("input[placeholder='Username']").should('have.value' , 'Admin')

  
    })


    it('Explicit Assertions', () => {
     
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
        cy.get("input[placeholder='Username']").type("Admin") // provide value to inbox
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click


        let expName="xyz";

        // cy.get(".oxd-userdropdown-name").then( (x)=>{
            cy.get(".oxd-userdropdown-name").then((x) => { 
            cy.log("Found the element successfully.");
            let actName = x.text();

         

           //BDD Style 
           expect(actName).to.equal(expName)
           expect(actName).to.not.equal(expName)


           //TDD Style 

           assert.equal(actName,expName)
           assert.notEqual(actName,expName)
       
       
                                                    })

  
    
      })

        
    })