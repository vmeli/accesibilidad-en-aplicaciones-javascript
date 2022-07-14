describe('Lesson 16 tests', () => {
  beforeEach(() => {
    cy.viewport('macbook-16');
    cy.visit('http://localhost:3000');
  });

  it.skip('Should not has a11y violations on load', () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  it.skip('Should notify screen-readers once a validation shows up', () => {
    cy.get('input#name').type('John Doe');
    cy.get('input#email').type('hello@johndoe.com');
    cy.get('input#password').focus().blur();
    cy.get('p#error-password[aria-live="assertive"]').should(
      'be.visible'
    );
    cy.get('input#passwordConfirm').type('123456');
  });

  it.skip('Should focus input when label is pressed', () => {
    cy.get('.field-text').each((label) => {
      label.click();
      cy.focused().should('match', '.field-text > input');
    });
  });
});
