import HomePage from '../page_objects/HomePage';
import ContactUsPage from '../page_objects/ContactUsPage';

describe('Contact Us form functionality', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com');
    HomePage.navigateToContactUs();
  });

  it('should submit the contact form successfully', () => {
    ContactUsPage.fillOutContactForm('John Doe', 'john.doe@example.com', 'Test message');
    ContactUsPage.verifySuccessMessage();
  });
});
