import HomePage from '../page_objects/HomePage';
import ProductPage from '../page_objects/ProductPage';
import CartPage from '../page_objects/CartPage';

describe('Cart page functionality', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com');
    HomePage.openFirstFeaturedProduct();
    ProductPage.addProductToCart();
    ProductPage.goToCart();
  });

  it('should display the correct product count', () => {
    CartPage.verifyCartItemCount(1);
  });

  it('should allow product removal', () => {
    CartPage.removeProductFromCart();
    CartPage.verifyCartItemCount(0);
  });

  it('should proceed to checkout', () => {
    CartPage.proceedToCheckout();
    CartPage.verifyCheckoutPage();
  });
});
