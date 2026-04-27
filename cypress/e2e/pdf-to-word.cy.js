//TC-PDF-001 --> Verify navigation to PDF to Word section 
//TC-PDF-003  --> Verify Convert button visibility 
//TC-PDF-004  --> Verify clear button works after uploading file. 
//TC-PDF-005  --> Verify PDF converts to Word successfully  

describe('PDF to Word Feature', () => {

  it('should upload PDF successfully', () => {
    cy.visit('https://www.pixelssuite.com/');

    cy.contains('PDF → Word').click();
    cy.url().should('include', 'pdf-to-word');

    cy.get('input[type="file"]', { timeout: 10000 })
      .should('exist')
      .selectFile('cypress/fixtures/sample.pdf', { force: true });

    // verify file name appears
    cy.contains('sample.pdf').should('exist');


    // click convert button
  cy.contains('Convert to Word')
    .should('be.visible')
    .click();

  // verify something changed (button disabled / processing text)
  cy.contains('Converting').should('exist'); // if exists

  // click clear
  cy.contains('Clear').click();

  // verify file removed
  cy.contains('sample.pdf').should('not.exist');

  });


});

//TC-PDF-02  --> Verify select PDF

  describe('Select PDF Button Functionality', () => {

  it('should upload file using Select PDF button', () => {

    cy.visit('https://www.pixelssuite.com/');

       // Check heading
    cy.contains('PDF → Word').should('be.visible');
    cy.contains('PDF → Word').click();
    cy.url().should('include', 'pdf-to-word');

    // Upload file
    cy.get('input[type="file"]', { timeout: 10000 })
      .should('exist')
      .selectFile('cypress/fixtures/sample.pdf', { force: true });

    // Verify file appears in "Selected" section
    cy.contains('sample.pdf').should('be.visible');
  });

});



//TC-PDF-06  --> Validate alignment and visibility of upload area 
//TC-PDF-07  --> Validate UI behaviour of "Select PDF" button 


describe('PDF to Word UI Validation', () => {

  it('should display upload UI elements correctly', () => {

    cy.visit('https://www.pixelssuite.com/');

    // Check heading
    cy.contains('PDF → Word').should('be.visible');
    cy.contains('PDF → Word').click();
    cy.url().should('include', 'pdf-to-word');

    // Upload box (drag & drop area)
    cy.contains('Drag and drop your file here')
      .should('be.visible');

    // Sub text
    cy.contains('click to browse from your device')
      .should('be.visible');

    // Select PDF button
    cy.contains('Select PDF')
      .should('be.visible');

    
  });

  });


//TC-PDF-08  --> Verify unsupported file format 


describe('PDF to Word - Unsupported File Format', () => {

  it('should show error for unsupported file type', () => {

    cy.visit('https://www.pixelssuite.com/');

    // Check heading
    cy.contains('PDF → Word').should('be.visible');
    cy.contains('PDF → Word').click();
    cy.url().should('include', 'pdf-to-word');

    // Upload wrong file type (example: txt file)
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/sample.txt', { force: true });

    // Verify error message (update text based on actual UI)
    cy.contains('Invalid file')
      .should('exist');
    
    // OR generic validation
    cy.contains('Only PDF allowed')
      .should('exist');
  });

});




//TC-PDF-09  --> Verify file size limit 

describe('Multiple Files Upload', () => {

  it('should not allow multiple files upload', () => {

    cy.visit('https://www.pixelssuite.com/');
    // Check heading
    cy.contains('PDF → Word').should('be.visible');
    cy.contains('PDF → Word').click();
    cy.url().should('include', 'pdf-to-word');

      // Convert button should NOT exist
  cy.contains('Convert to Word').should('not.exist');

  cy.get('input[type="file"]')
  .selectFile([
    'cypress/fixtures/sample.pdf',
    'cypress/fixtures/sample2.pdf'
  ], { force: true });


      // click convert button
  cy.contains('Convert to Word')
    .should('be.visible')
    .click();

      cy.contains('Converting').should('exist'); // if exists



  });

});


describe('PDF to Word - Large File Upload', () => {

  it('should handle large file upload correctly', () => {

    cy.visit('https://www.pixelssuite.com/');

        // Check heading
    cy.contains('PDF → Word').should('be.visible');
    cy.contains('PDF → Word').click();
    cy.url().should('include', 'pdf-to-word');


    // Upload large file (make sure you have this file in fixtures)
    cy.get('input[type="file"]', { timeout: 10000 })
      .selectFile('cypress/fixtures/large.pdf', { force: true });

            // click convert button
  cy.contains('Convert to Word')
    .should('be.visible')
    .click();

    // Option 1: Check error message
    cy.contains('File too large')
      .should('exist');

    // Option 2: File should NOT be listed
    cy.contains('large.pdf')
      .should('not.exist');

    // Option 3: Convert button should NOT appear
    cy.contains('Convert to Word')
      .should('not.exist');

  });

});