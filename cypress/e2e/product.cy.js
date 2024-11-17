import HomePage from '../page_objects/HomePage';
import ProductPage from '../page_objects/ProductPage';

describe('Product page functionality', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com');
    HomePage.openFirstFeaturedProduct();
  });

  it('should add a product to the cart', () => {
    ProductPage.addProductToCart();
    ProductPage.verifyProductAddedToCart();
  });

  it('should navigate to the cart after adding product', () => {
    ProductPage.addProductToCart();
    ProductPage.goToCart();
    cy.url().should('include', 'cart');
  });
});
