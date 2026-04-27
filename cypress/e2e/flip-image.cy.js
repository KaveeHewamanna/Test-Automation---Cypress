describe('Flip Image', () => {

  beforeEach(() => {
    cy.visit('https://www.pixelssuite.com/flip-image');
  });

  it('Flip image horizontally', () => {
    cy.get('input[type="file"]').selectFile(
      'cypress/fixtures/sample.jpg',
      { force: true }
    );

    cy.contains('Flip Horizontal').click();
    cy.contains('Download PNG').should('be.visible');
  });

});