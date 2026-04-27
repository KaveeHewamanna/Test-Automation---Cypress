describe('Crop Image Feature', () => {

  it('should open crop page and perform full crop flow', () => {

    // Navigate
    cy.visit('https://www.pixelssuite.com/');
    cy.contains('To JPG').first().click({ force: true }); 
    // OR use: cy.contains('Crop') if clickable

    cy.url().should('include', 'crop');

    // Upload image
    cy.get('input[type="file"]', { timeout: 10000 })
      .should('exist')
      .selectFile('cypress/fixtures/sample.jpg', { force: true });

    // // Verify preview appears
    // cy.get('img').should('be.visible');


   

    // Click Download
    cy.contains('Download')
      .should('be.visible')
      .click();

      cy.contains('Download').click()

      cy.readFile('cypress/downloads/image.jpg', { timeout: 10000 })
      .should('exist')

  


  });

});