describe('Color Picker', () => {

  beforeEach(() => {
    cy.visit('https://www.pixelssuite.com/color-picker');
  });

  it('Check color picker visible', () => {
    cy.contains('Color Picker').should('be.visible');
    cy.contains('Copy').should('be.visible');
  });

});