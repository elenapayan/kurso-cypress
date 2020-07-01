/// <reference types="Cypress" />

it('simple', () => {
    cy.visit('http://localhost:4200/home');
    cy.get('.ui-button-text-only > .ui-button-text').click();
    cy.get('.ui-button-raised > .ui-button-text').click();
    cy.get('[type="text"]').type('admin1');
    cy.get('[type="password"]').type('1234');
    cy.get('form > button').click();
})