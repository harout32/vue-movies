/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    expectMovieListToHaveItems: () => Chainable<Element>;
    inputMovieSearch: (value: string) => Chainable<Element>;
    expectToSeeMovieListNotFound: () => Chainable<Element>;
    clickOnNextPage: () => Chainable<Element>;
    expectPaginationNumber: (pageNumber: string) => Chainable<Element>;
  }
}

Cypress.Commands.add('expectMovieListToHaveItems', () => {
  cy.getByTestId('movie-list').children().should('have.length.at.least', 1);
});

Cypress.Commands.add('inputMovieSearch', (value: string) => {
  cy.getByTestId('input').type(value);
});

Cypress.Commands.add('expectToSeeMovieListNotFound', () => {
  cy.getByTestId('movie-list-not-found').should('exist');
});

Cypress.Commands.add('clickOnNextPage', () => {
  cy.getByTestId('pagination-next').click();
});

Cypress.Commands.add('expectPaginationNumber', (value: string) => {
  cy.getByTestId('pagination-number').should('have.text', value);
});
