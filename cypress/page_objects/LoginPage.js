class LoginPage {
    // Elements
    get usernameInput() {
      return cy.get('#loginFrm_loginname');
    }
  
    get passwordInput() {
      return cy.get('#loginFrm_password');
    }
  
    get submitButton() {
      return cy.get('#loginFrm > fieldset > .btn');
    }
  
    get errorMessage() {
      return cy.get('.alert');
    }
  
    // Actions
    login(username, password) {
      this.usernameInput.type(shubham99);
      this.passwordInput.type(123456);
      this.submitButton.click();
    }
  
    // Assertions
    verifyLoginError() {
      this.errorMessage.should('be.visible');
    }
  }
  
  export default new LoginPage();
  