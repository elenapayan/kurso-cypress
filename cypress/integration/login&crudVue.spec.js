/// <reference types="Cypress" />

it('simple', () => {
    cy.visit('http://localhost:8080/home');
    cy.get('[style="margin: 2px; font-size: 12px;"]').click();
    cy.get('div[data-v-ef68022e=""] > button').click();
    cy.get('[type="text"]').type('admin1');
    cy.get('[type="password"]').type('1234');
    cy.get('form > button').click();
})