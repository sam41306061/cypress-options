/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
    // set your aliases(state variables) in before each to help not have to call later 

    cy.get('[data-test="items"]').as('allItems');
    cy.get('[data-test="items-unpacked"]').as('unpackedItems');
    cy.get('[data-test="items-packed"]').as('packedItems');

    cy.get('[data-test="filter-items"]').as('filterInput');
    
    it('should filter items', () => {
      cy.get('@filterInput').type('iPhone');
      cy.get('@allItems').should('contain.text', 'iPhone');
      cy.get('@allItems').should('not.contain.text', 'Hoodie');
    });
  });
  // describe('Make an alias for the filter input.', () => {
   
  // });
  describe('Type a search term into that filter.', () => {
    it('something here', () => {});
  });
  describe('Verify that only items match that filter are shown on the page.', () => {
    it('something here', () => {});
  });
});
