class LoginPage {

    getUsernameField() {
        return cy.get('#username')
    }

    getPasswordField() {
        return cy.get('#password')
    }

    getLoginButton() {
        return cy.get('#login_btn')
    }

    getSuccesMessage() {
        return cy.get('#succes_message')
    }

       
}