

describe('Verify Add employee functionality', () => {
   
    it('Verify add employee with Mandotory details', () => {

        cy.log("Test execution started")
       
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username2"]').type("Admin")
        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or

        cy.url().should("include", "/web/index.php/dashboard/index")

        cy.contains('PIM').click()

        cy.contains('Add Employee').click()

        cy.get('input[name="firstName"]').type("kiran")

        cy.get('input[name="lastName"]').type("Rao")

        cy.get('button[type="submit"]').click()

        cy.contains('Successfully Saved').should("be.visible")

      })

      

  })