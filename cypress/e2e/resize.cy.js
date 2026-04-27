//Navigate + UI Validation
describe('Resize Image Feature', () => {

  it('should navigate to resize page and verify UI', () => {

    cy.visit('https://www.pixelssuite.com/');

    cy.contains('Resize').click();
    cy.url().should('include', 'resize-image');

    cy.contains('Resize').should('be.visible');
    cy.contains('Select files').should('be.visible');
    cy.contains('Drag and drop your file here').should('be.visible');

  });

});
//Upload Image + Preview

it('should upload image and show preview', () => {

  cy.visit('https://www.pixelssuite.com/');

  cy.contains('Resize').click();
    cy.url().should('include', 'resize-image');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.jpg', { force: true });

  // preview visible
  cy.get('img').should('be.visible');

});


//Verify Original Dimensions

it('should display original dimensions', () => {

  cy.visit('https://www.pixelssuite.com/resize-image');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.jpg', { force: true });

  cy.contains('Original').should('exist');

});


//Change Width & Height

it('should allow changing width and height', () => {

  cy.visit('https://www.pixelssuite.com/resize-image');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.jpg', { force: true });

  // better selector (first 2 inputs = width & height)
  cy.get('input').eq(0).clear().type('800');
  cy.get('input').eq(1).clear().type('600');

});


//Keep Aspect Ratio Toggle

it('should toggle keep aspect ratio checkbox', () => {

  cy.visit('https://www.pixelssuite.com/resize-image');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.jpg', { force: true });

  cy.contains('Keep aspect').click();

});


//Download Resized Image

it('should download resized image', () => {

  cy.visit('https://www.pixelssuite.com/resize-image');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.jpg', { force: true });

  cy.contains('Download PNG')
    .should('be.visible')
    .click();

});

//Clear Functionality

it('should clear uploaded image', () => {

  cy.visit('https://www.pixelssuite.com/resize-image');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.jpg', { force: true });

  cy.contains('Clear').click();

  cy.get('img').should('not.exist');

});





//Unsupported File Format

it('should reject unsupported file format', () => {

  cy.visit('https://www.pixelssuite.com/resize-image');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/sample.txt', { force: true });

  cy.contains('.txt').should('not.exist');

});


//Large File Test

it('should handle large image upload', () => {

  cy.visit('https://www.pixelssuite.com/resize-image');

  cy.get('input[type="file"]')
    .selectFile('cypress/fixtures/large.jpg', { force: true });

  // preview should NOT appear if rejected
  cy.get('img').should('not.exist');

});