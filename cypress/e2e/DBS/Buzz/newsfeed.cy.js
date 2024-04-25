



describe('Verify Addemployee Buzz functionality', () => {

    
    

    it('Verify login with  valid credentials ', () => {

      cy.log("Test Execution started ")

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type("Admin")
      cy.get('input[name="password"]').type("admin123")
      cy.get('button[type="submit"]').click()

     cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

      //or
      cy.url().should("include","/web/index.php/dashboard/index")

      cy.contains("Buzz").click()

      cy.url().should("include", "/web/index.php/buzz/viewBuzz")

      cy.get(`textarea[placeholder="What's on your mind?"]`).type("Happy Birthday SBR");

      cy.get('button[type="submit"]').click()  

      cy.contains('Happy Birthday SBR', { timeout: 10000 }).should("be.visible");

      

    })

    
  })