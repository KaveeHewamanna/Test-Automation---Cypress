describe('Image Converter Feature - Basic Flow', () => {

  it('should open convert page, upload image and click download', () => {

    cy.visit('https://www.pixelssuite.com/');

    // Navigate
    cy.contains('Image Converter').click({ force: true });
    cy.contains('To PNG').click({ force: true });

    // URL check (loose)
    cy.url().should('include', 'png');

    // Upload image
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/sample.jpg', { force: true });


    // Check dropdown exists
    cy.get('select').should('be.visible');

    // Click download (no strict validation)
    cy.contains('Download').click({ force: true });

  });

});