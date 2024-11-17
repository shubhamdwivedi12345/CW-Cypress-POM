class HomePage {
    // Elements
    get searchInput() {
      return cy.get('#filter_keyword');
    }
  
    get searchButton() {
      return cy.get('#topnav > .form-control');
    }
  
    get featuredProducts() {
      return cy.get('#product_details > :nth-child(1) > :nth-child(2) > .row > .col-md-12');
    }
  
    get firstFeaturedProduct() {
      return cy.get('.maintext').first();
    }
  
    get contactUsLink() {
      return cy.get('.footersocial > .container-fluid > :nth-child(2)');
    }
    get logo() {
      return cy.get('.logo > img');
    }
  
    // Actions
    searchProduct(productName) {
      this.searchInput.clear().type(productName);
      this.searchButton.select("0");
    }
  
    openFirstFeaturedProduct() {
      this.firstFeaturedProduct.click();
    }
  
    navigateToContactUs() {
      this.contactUsLink.click();
    }
  
    // Assertions
    verifyHomepageLoaded() {
      this.logo.should('be.visible');
      cy.url().should('eq', 'https://automationteststore.com/');
    }
  
    verifyProductInResults(productName) {
      cy.contains(productName).should('be.visible');
    }
  }
  
  export default new HomePage();
  