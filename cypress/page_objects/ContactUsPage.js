class ContactUsPage {
    // Elements
    get nameInput() {
      return cy.get('input[name="contact_name"]');
    }
  
    get emailInput() {
      return cy.get('input[name="contact_email"]');
    }
  
    get messageInput() {
      return cy.get('textarea[name="contact_message"]');
    }
  
    get submitButton() {
      return cy.get('button[name="submit"]');
    }
  
    get successMessage() {
      return cy.get('.alert-success');
    }
  
    // Actions
    fillOutContactForm(name, email, message) {
      this.nameInput.clear().type(name);
      this.emailInput.clear().type(email);
      this.messageInput.clear().type(message);
      this.submitButton.click();
    }
  
    // Assertions
    verifySuccessMessage() {
      this.successMessage.should('be.visible').and('contain', 'Your message has been successfully sent');
    }
  }
  
  export default new ContactUsPage();
  