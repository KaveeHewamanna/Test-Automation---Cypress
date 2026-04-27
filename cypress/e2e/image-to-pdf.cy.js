
//Navigate + UI Check
describe('Image to PDF - UI Validation', () => {

  it('should load Image to PDF page correctly', () => {
    
    cy.visit('https://www.pixelssuite.com/');
    
    cy.contains('Image → PDF').click();
    cy.url().should('include', 'image-to-pdf');
    
    cy.contains('Image → PDF').should('be.visible');
    cy.contains('Select Images').should('be.visible');
    cy.contains('Create PDF').should('be.visible'); // before upload
    
  });

});


it('should upload image successfully', () => {

  cy.visit('https://www.pixelssuite.com/');

    cy.contains('Image → PDF').click();
    cy.url().should('include', 'image-to-pdf');

    cy.contains('Image → PDF').should('be.visible');
    cy.contains('Select Images').should('be.visible');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.jpg', { force: true });

  // check image name appears
  cy.contains('sample.jpg').should('exist');

  // preview should show
  cy.get('img').should('be.visible');

});


it('should allow changing options', () => {

  cy.visit('https://www.pixelssuite.com/');

  
    cy.contains('Image → PDF').click();
    cy.url().should('include', 'image-to-pdf');

    cy.contains('Image → PDF').should('be.visible');
    cy.contains('Select Images').should('be.visible');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.jpg', { force: true });

  // Page size
  cy.contains('Letter').click();

  // Orientation
  cy.contains('Landscape').click();

  // Arrange
  cy.contains('Horizontal').click();

});



it('should create PDF after upload', () => {

  cy.visit('https://www.pixelssuite.com/');

    cy.contains('Image → PDF').click();
    cy.url().should('include', 'image-to-pdf');

    cy.contains('Image → PDF').should('be.visible');
    cy.contains('Select Images').should('be.visible');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.jpg', { force: true });

  cy.contains('Create PDF')
    .should('be.visible')
    .click();

  // Optional: check loading / result
  cy.wait(2000);

});




it('should remove uploaded image', () => {

  cy.visit('https://www.pixelssuite.com/');

    cy.contains('Image → PDF').click();
    cy.url().should('include', 'image-to-pdf');

    cy.contains('Image → PDF').should('be.visible');
    cy.contains('Select Images').should('be.visible');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.jpg', { force: true });

  cy.contains('Remove').click();

  cy.contains('.jpg').should('not.exist');

});


it('should clear all uploaded images', () => {

  cy.visit('https://www.pixelssuite.com/');

    cy.contains('Image → PDF').click();
    cy.url().should('include', 'image-to-pdf');

    cy.contains('Image → PDF').should('be.visible');
    cy.contains('Select Images').should('be.visible');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.jpg', { force: true });

  cy.contains('Clear').click();

  cy.contains('.jpg').should('not.exist');

});


it('should upload multiple images', () => {

  cy.visit('https://www.pixelssuite.com/');

    cy.contains('Image → PDF').click();
    cy.url().should('include', 'image-to-pdf');

    cy.contains('Image → PDF').should('be.visible');
    cy.contains('Select Images').should('be.visible');

  cy.get('input[type="file"]')
    .selectFile([
      'cypress/fixtures/sample.jpg',
      'cypress/fixtures/sample2.jpg'
    ], { force: true });

  cy.contains('.jpg').should('exist');

});