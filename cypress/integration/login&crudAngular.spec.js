/// <reference types="Cypress" />

it('simple', () => {
    cy.visit('http://localhost:4200/home');
    cy.get('.ui-button-text-only > .ui-button-text').click();
    cy.get('.ui-button-raised > .ui-button-text').click();
    cy.get('[type="text"]').type('admin1');
    cy.get('[type="password"]').type('1234');
    cy.get('form > button').click();
    cy.get('.ui-button-success > .ui-button-text').click();
    cy.get('#title').type('save');
    cy.get('.ui-float-label > #float-input').type('save');
    cy.get(':nth-child(3) > #float-input').type('save');
    cy.get('form.ng-dirty > .ui-button-raised > .ui-button-icon-left').click();
    cy.get(':nth-child(3) > :nth-child(4) > .buttons-container > .ng-star-inserted > .ui-button-warning > .ui-button-icon-left').click();
    cy.get('#title').type('update');
    cy.get('.ui-float-label > #float-input').type('update');
    cy.get(':nth-child(3) > #float-input').type('update');
    cy.get('form.ng-dirty > .ui-button-raised > .ui-button-icon-left').click();
    cy.get(':nth-child(3) > :nth-child(4) > .buttons-container > .ui-button-info').click();
    cy.get('.ui-button-raised > .ui-button-text').click();
    cy.get(':nth-child(1) > #float-input').type('save');
    cy.get('[style="margin-top: 15px;"] > #float-input').type('save');
    cy.get('form.ng-dirty > .ui-button-raised').click();
    cy.get('.ui-button-warning').click();
    cy.get(':nth-child(1) > #float-input').type('update');
    cy.get('[style="margin-top: 15px;"] > #float-input').type('update');
    cy.get('form.ng-dirty > .ui-button-raised').click();
    cy.get('.ui-button-danger').click();
    cy.get('.nav-container > :nth-child(1) > .ui-button-text-only > .ui-button-text').click();
    cy.get(':nth-child(3) > :nth-child(4) > .buttons-container > .ng-star-inserted > .ui-button-danger').click();
    cy.get(':nth-child(2) > .ui-button-secondary').click();
})