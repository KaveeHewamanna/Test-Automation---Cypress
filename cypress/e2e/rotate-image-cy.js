describe('Rotate Image', () => {

  beforeEach(() => {
    cy.visit('https://www.pixelssuite.com/rotate-image');
  });

  it('Rotate image', () => {
    cy.get('input[type="file"]').selectFile(
      'cypress/fixtures/sample.jpg',
      { force: true }
    );

    cy.contains('+90°').click();
    cy.contains('Download Rotated').should('be.visible');
  });

});