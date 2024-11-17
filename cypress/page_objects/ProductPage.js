class ProductPage {
    // Elements
    get addToCartButton() {
      return cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa');
    }
  
    get productTitle() {
      return cy.get('.bgnone');
    }
  
    get productPrice() {
      return cy.get('.productfilneprice');
    }
  
    get cartButton() {
      return cy.get('.maintext');
    }
  
    // Actions
    addProductToCart() {
      this.addToCartButton.click();
    }
  
    goToCart() {
      this.cartButton.click();
    }
  
    // Assertions
    verifyProductPageLoaded() {
      this.productTitle.should('be.visible');
      this.productPrice.should('be.visible');
    }
  
    verifyProductAddedToCart() {
      this.cartButton.should('contain', '1 item');
    }
  }
  
  export default new ProductPage();
  