describe('Shazbat website', () => {
  it('logs in and views schedule', () => {
    cy.visit('https://www.shazbat.tv/');
    cy.get('.login-wrap > .form-control:nth-child(2)').click();
    cy.get('.login-wrap > .form-control:nth-child(2)').type(Cypress.env('USERNAME'));
    cy.get('.form-control:nth-child(4)').click();
    cy.get('.form-control:nth-child(4)').type(Cypress.env('PASSWORD'));
    cy.get('.form-login').submit();
    cy.url().should('contains', 'https://www.shazbat.tv/login');
    cy.get('.sub-menu:nth-child(9) > .internal').click();
    cy.get('.label-theme').click();
    cy.visit('https://www.shazbat.tv/logout');
  });
});
