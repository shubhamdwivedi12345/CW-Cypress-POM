class CartPage {
    // Elements
    get productCount() {
      return cy.get('.container-fixed > :nth-child(2) > :nth-child(1)');
    }
  
    get checkoutButton() {
      return cy.get('#cart_checkout1');
    }
  
    get removeItemButton() {
      return cy.get(':nth-child(2) > :nth-child(7) > .btn');
    }
  
    // Actions
    removeProductFromCart() {
      this.removeItemButton.click();
    }
  
    proceedToCheckout() {
      this.checkoutButton.click();
    }
  
    // Assertions
    verifyCartItemCount(expectedCount) {
      this.productCount.should('contain', expectedCount);
    }
  
    verifyCheckoutPage() {
      cy.url().should('include', '/checkout');
    }
  }
  
  export default new CartPage();
  