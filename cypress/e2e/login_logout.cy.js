import LoginPage from '../page_objects/LoginPage';
import HomePage from '../page_objects/HomePage';

describe('Login and Logout functionality', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://automationteststore.com');
    HomePage.navigateToLogin();
    LoginPage.login('shubham99', '123456');
    cy.url().should('include', 'dashboard');
  });

  it('should display error on invalid login', () => {
    cy.visit('https://automationteststore.com');
    HomePage.navigateToLogin();
    LoginPage.login('shubham99', '123456');
    cy.contains('Error').should('be.visible');
  });
});
