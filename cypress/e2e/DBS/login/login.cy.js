


describe('Verify Login functionality', () => {


    it('Verify Login with valid Credentials', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type("Admin")
        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        cy.url().should("eq", 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        //or

        cy.url().should("include", "/web/index.php/dashboard/index")

        //or

        cy.contains('Dashboard').should('be.visible')

    })

    it('Verify login with valid Username and Invalid password', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type("Admin")
        cy.get('input[type="password"]').type("rfhuergfui")
        cy.get('button[type="submit"]').click()

        //assertion

        cy.contains('Invalid credentials').should("be.visible")


    })

    it('Verify login with invalid Username and valid password ', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type("wehgfheg")
        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        //assertion

        cy.contains('Invalid credentials').should("be.visible")

    })

    it('Verify login with invalid Username and invalid password', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get('input[name="username"]').type("Adegwfuygewmin")
        cy.get('input[type="password"]').type("rfhuergfui")
        cy.get('button[type="submit"]').click()

        //assertion

        cy.contains('Invalid credentials').should("be.visible")

    })

})