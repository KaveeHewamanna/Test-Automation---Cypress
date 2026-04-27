
//TC-WORD-001 --> Verify navigation to Word to PDF section
//TC-WORD-002 --> Verify upload DOCX file
//TC-WORD-003 --> Verify Convert button visibility
//TC-WORD-004 --> Verify conversion works
//TC-WORD-005 --> Verify clear button

describe('Word to PDF Feature', () => {

  it('should upload Word file and convert successfully', () => {

    cy.visit('https://www.pixelssuite.com/');

    cy.contains('Word → PDF').click();
    cy.url().should('include', 'word-to-pdf');

    // Upload Word file
    cy.get('input[type="file"]', { timeout: 10000 })
      .should('exist')
      .selectFile('cypress/fixtures/sample.docx', { force: true });

    // verify file name appears
    cy.contains('sample.docx').should('exist');

    // Convert button visible
    cy.contains('Convert to PDF')
      .should('be.visible')
      .click();

    // verify conversion started
    cy.contains('Converting').should('exist'); // adjust if needed

    // Clear
    cy.contains('Clear').click();

    // file removed
    cy.contains('sample.docx').should('not.exist');

  });

});

//TC-WORD-006 --> Validate Select Word button

describe('Select Word Button Functionality', () => {

  it('should upload Word file using Select button', () => {

    cy.visit('https://www.pixelssuite.com/');

    cy.contains('Word → PDF').click();
    cy.url().should('include', 'word-to-pdf');

    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/sample.docx', { force: true });

    cy.contains('sample.docx').should('be.visible');

  });

});


//TC-WORD-007 --> Validate UI elements

describe('Word to PDF UI Validation', () => {

  it('should display upload UI correctly', () => {

    cy.visit('https://www.pixelssuite.com/');

    cy.contains('Word → PDF').click();
    cy.url().should('include', 'word-to-pdf');

    cy.contains('Drag and drop your file here').should('be.visible');
    cy.contains('click to browse from your device').should('be.visible');
    cy.contains('Select Word').should('be.visible');

  });

});


//TC-WORD-008 --> Unsupported file format

describe('Word to PDF - Unsupported File Format', () => {

  it('should reject non-word files', () => {

    cy.visit('https://www.pixelssuite.com/');

    cy.contains('Word → PDF').click();
    cy.url().should('include', 'word-to-pdf');

    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/sample.txt', { force: true });

    cy.contains('Invalid file').should('exist');
    cy.contains('Only Word allowed').should('exist');

  });

});



//TC-WORD-009 --> Large file validation

describe('Word to PDF - Large File Upload', () => {

  it('should handle large Word file correctly', () => {

    cy.visit('https://www.pixelssuite.com/');

    cy.contains('Word → PDF').click();
    cy.url().should('include', 'word-to-pdf');

    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/large.docx', { force: true });

    cy.contains('File too large').should('exist');

  });

});