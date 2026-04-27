//Verify homepage loads successfully

describe('Home Page Load', () => {
  it('should load the homepage successfully', () => {
    cy.visit('https://www.pixelssuite.com/');
    cy.url().should('include', 'pixelssuite');
    cy.title().should('not.be.empty');
  });
});

//Check main heading text

describe('Homepage Heading', () => {
  it('should display correct main heading', () => {
    cy.visit('https://www.pixelssuite.com/');

    cy.contains('Free Online Tools').should('be.visible');
    cy.contains('Convert, Compress').should('be.visible');
  });
});


//Validate all sections are visible

describe('Tool Sections Visibility', () => {
  it('should display all main tool sections', () => {
    cy.visit('https://www.pixelssuite.com/');

    cy.contains('Document Converter').should('be.visible');
    cy.contains('PDF Editor').should('be.visible');
    cy.contains('Resize').should('be.visible');
    cy.contains('Crop').should('be.visible');
    cy.contains('Compress').should('be.visible');
    cy.contains('Image Converter').should('be.visible');
    cy.contains('Transliteration').should('be.visible');
    cy.contains('More Tools').should('be.visible');
  });
});


//Click each link and verify navigation

describe('Navigation - PDF to Word', () => {
  it('should navigate to PDF to Word page', () => {
    cy.visit('https://www.pixelssuite.com/');

    cy.contains('PDF → Word').click();
    cy.url().should('include', 'pdf-to-word');
  });
});


//Image → PDF

it('should navigate to Image to PDF page', () => {
  cy.visit('https://www.pixelssuite.com/');

  cy.contains('Image → PDF').click();
  cy.url().should('include', 'image-to-pdf');
});

//Word → PDF
it('should navigate to Word to PDF page', () => {
  cy.visit('https://www.pixelssuite.com/');

  cy.contains('Word → PDF').click();
  cy.url().should('include', 'word-to-pdf');
});


//Crop Image Test


describe('Crop Image Feature', () => {

  it('should open Crop page', () => {
    cy.visit('https://www.pixelssuite.com/');

    cy.contains('To JPG').first().click({ force: true }); 
    // OR use: cy.contains('Crop') if clickable

    cy.url().should('include', 'crop');
  });

});


//Crop Image (WebP)

describe('Crop Image Feature', () => {

  it('should open Crop Image', () => {
    cy.visit('https://www.pixelssuite.com/');

    cy.contains('To WebP').click({ force: true });

    cy.url().should('include', 'webp');
  });

});

//Crop Image (PNG)

describe('Crop Image Feature', () => {

  it('should open Crop Image', () => {
    cy.visit('https://www.pixelssuite.com/');

    cy.contains('To PNG').click({ force: true });

    cy.url().should('include', 'png');
  });

});

//Compress Image Test

describe('Compress Image Feature', () => {

  it('should open Compress page', () => {
    cy.visit('https://www.pixelssuite.com/');

    cy.contains('Compress Image').click({ force: true });

    cy.url().should('include', 'compress');
  });

});



//Open Editor

it('should open PDF editor page', () => {
  cy.visit('https://www.pixelssuite.com/');

  cy.contains('Open Editor').click();
  cy.url().should('include', 'editor');
});


//Loop through links

describe('All Links Clickable', () => {
  it('should click all tool links', () => {
    cy.visit('https://www.pixelssuite.com/');

    const links = [
      'Image → PDF',
      'PDF → Word',
      'Word → PDF',
      'Resize',
      'Batch Resize',
      'Image Enlarger',
      'To JPG',
      'To PNG',
      'To WebP',
      'Compress Image',
      'To GIF',
      'Standard',
      'Chat',
      'Rotate',
      'Flip',
      'Meme',
      'Color Picker',
      'Image → Text'
    ];

    links.forEach((link) => {
      cy.contains(link).should('be.visible');
    });
  });
});


//Cards count

it('should display multiple tool cards', () => {
  cy.visit('https://www.pixelssuite.com/');

  cy.get('div').should('exist'); // basic
  cy.get('a').should('have.length', 5);
});


//Responsive Check

it('should work on mobile view', () => {
  cy.viewport('iphone-6');
  cy.visit('https://www.pixelssuite.com/');

  cy.contains('Free Online Tools').should('be.visible');
});

