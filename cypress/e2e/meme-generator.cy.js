describe('Image to Text - Basic Flow', () => {

  it('should upload image and click OCR', () => {

    cy.visit('https://www.pixelssuite.com/');

    // Navigate
    cy.contains('More').click({ force: true });
    cy.contains('Image to Text').click({ force: true });

    // URL check
    cy.url().should('include', 'image-to-text');

    // Upload image
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/sample.jpg', { force: true });

    // Just check image appears
    cy.get('img').should('be.visible');

    // Click OCR button
    cy.contains('Start OCR')
      .should('be.visible')
      .click({ force: true });

    // Just check textarea appears (NO content validation)
    cy.get('textarea', { timeout: 20000 })
      .should('be.visible');

  });

});