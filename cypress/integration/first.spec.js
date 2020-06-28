/// <reference types="Cypress" />

it('simple', () => {
    cy.visit('https://www.google.es');
    cy.get('.gLFyf').type('Cypress');
    cy.get(':nth-child(2) > .jKWzZXdEJWi__suggestions-inner-container > .sbtc > .sbl1 > span').click();
})