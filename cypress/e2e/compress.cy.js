describe('Compress Image Feature', () => {

  it('should open compress page and perform full flow', () => {

    // Navigate
    cy.visit('https://www.pixelssuite.com/');

    cy.contains('Compress Image').click({ force: true });
    cy.url().should('include', 'compress');

    cy.contains('Compress Image').should('be.visible');

    // Upload image
    cy.get('input[type="file"]', { timeout: 10000 })
      .should('exist')
      .selectFile('cypress/fixtures/sample.jpg', { force: true });

    // Change format (dropdown)
    cy.get('select').select('JPEG');
    cy.get('select').select('WEBP');


    // Change quality (slider)
    cy.get('input[type="range"]')
      .invoke('val', 50)
      .trigger('input');

    // Verify quality indicator exists
    cy.contains('%').should('exist');

    // Click Download
    cy.contains('Download')
      .should('be.visible')
      .click();

    // Click Clear
    cy.contains('Clear').click();

    // Verify image removed
    cy.get('img').should('not.exist');

  });

});