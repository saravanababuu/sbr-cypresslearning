


describe('Assertions demo', () => {
 
     
    it('Explicit Assertions', () => {
     
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
        cy.get("input[placeholder='Username']").type("Admin") // provide value to inbox
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
       // cy.get(".oxd-userdropdown-name", { timeout: 10000 }).should("be.visible");

        let expName="Test 93 user";

            
            cy.get(".oxd-userdropdown-name").then((x) => { 
           // cy.log("Found the element successfully.");
          // cy.get(".oxd-userdropdown-name", { timeout: 10000 }).should("be.visible");
            let actName = x.text();

         

           //BDD Style 
           expect(actName).to.equal(expName)
           //expect(actName).to.not.equal(expName)


           //TDD Style 

           assert.equal(actName,expName)
          // assert.notEqual(actName,expName)
       
       
                                                    })

  
    
      })

        
    })