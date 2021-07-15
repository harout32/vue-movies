/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByTestId: (value: string) => Chainable<Element>;
  }
}

Cypress.Commands.add('getByTestId', (value: string) => {
  return cy.get(`[data-test-id=${value}]`);
});
