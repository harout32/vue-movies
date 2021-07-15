describe('movies page', () => {
  it('should show movie list on initial load', () => {
    cy.visit('').expectMovieListToHaveItems();
  });

  it('should show no result found when searching for a not existing movie', () => {
    cy.visit('').inputMovieSearch('some none existing movie').expectToSeeMovieListNotFound();
  });

  it.only('should show show next page when clicking next page', () => {
    cy.visit('').expectPaginationNumber('1').expectMovieListToHaveItems().clickOnNextPage().expectPaginationNumber('2');
  });
});
