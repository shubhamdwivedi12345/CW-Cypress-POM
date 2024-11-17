import HomePage from '../page_objects/HomePage';

describe('Homepage functionality', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com');
  });

  it('should load the homepage', () => {
    HomePage.verifyHomepageLoaded();
  });

  it('should search for a product', () => {
    const productName = 'Shampoo';
    HomePage.searchProduct(productName);
    HomePage.verifyProductInResults(productName);
  });
});
