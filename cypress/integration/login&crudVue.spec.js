/// <reference types="Cypress" />

it('simple', () => {
    cy.visit('http://localhost:8080/home');
    cy.get('[href="/backOffice/"]').click();
    cy.get('div[data-v-ef68022e=""] > button').click();
    cy.get('[type="text"]').type('admin1');
    cy.get('[type="password"]').type('1234');
    cy.get('form > button').click();
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2)').click();
    cy.get('[name="title"]').type('save');
    cy.get('[name="nickname"]').type('save');
    cy.get('[name="content"]').type('save');
    cy.get('[type="submit"]').click();
    cy.get('ul > :nth-child(3) > div > :nth-child(1)').click();
    cy.get('[name="title"]').type('update');
    cy.get('[name="nickname"]').type('update');
    cy.get('[name="content"]').type('update');
    cy.get('[type="submit"]').click();
    cy.get(':nth-child(3) > :nth-child(4) > a').click();
    cy.get(':nth-child(2) > button').click();
    cy.get('[name="comment"]').type('save');
    cy.get('[name="nickname"]').type('save');
    cy.get('[type="submit"]').click();
    cy.get('li > div > :nth-child(1)').click();
    cy.get('[name="comment"]').type('update');
    cy.get('[name="nickname"]').type('update');
    cy.get('li > div > :nth-child(1)').click();
    cy.get('ul > :nth-child(1) > div > :nth-child(2)');
    cy.get('.router-link-active').click();
    cy.get(':nth-child(3) > div > :nth-child(2)').click();
})