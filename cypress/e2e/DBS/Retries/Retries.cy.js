
describe('Verify Login functionality', () => {

    
    

    it('Verify login with  valid credentials ', () => {

      cy.log("Test Execution started ")

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type("Admin")
      cy.get('input[name="password"]').type("admin123")
      cy.get('button[type="submit"]').click()

     cy.url().should("eq",'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

      //or
      cy.url().should("include","/web/index.php/dashboard/index")

      //or
      cy.contains('Dashboard').should('be.visible')
      

    })

    it('Verify login with  valid username and Invalid password  ', () => {

      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get('input[name="username"]').type("Admin")
      cy.get('input[name="password"]').type("admin1234")
      cy.get('button[type="submit"]').click()
    
      //assertions

      cy.contains('Invalid credentials').should('be.visible')
  
     })


     it('Verify login with  invalid username and valid password ', () => {

     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     cy.get('input[name="username"]').type("Admin123")
     cy.get('input[name="password"]').type("admin123")
     cy.get('button[type="submit"]').click()

     //assertions

     cy.contains('Invalid credentials').should('be.visible')
        
  
     })

    it('Verify login with  invalid username and Invalid password ', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username2"]').type("Admin123")
    cy.get('input[name="password"]').type("admin1234")
    cy.get('button[type="submit"]').click()
    
    //assertions

     cy.contains('Invalid credentials').should('be.visible')
        
  
    })


  })