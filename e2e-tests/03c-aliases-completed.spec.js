/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
    cy.get('[data-test="items"]').as('allItems');
    cy.get('[data-test="items-unpacked"]').as('unpackedItems');
    cy.get('[data-test="items-packed"]').as('packedItems');

    cy.get('[data-test="filter-items"]').as('filterInput');
  });

  it('should hold onto an alias', () => {
    cy.get('@unpackedItems').find('label').first().as('firstItem');
    cy.get('@firstItem').invoke('text').as('text');
    cy.get('@firstItem').find('input[type="checkbox"]').click();

    cy.get('@text').then((text) => {
      cy.get('@packedItems').find('label').first().should('include.text', text);
    });
  });
  
  // nested tests with assertion of moving things around
  it('should move items from one list to the other', () => {
    cy.get('@unpackedItems').find('label').first().as('itemLabel');
    cy.get('@itemLabel')
    .invoke('text')
    .then((text) => {
      cy.get('@itemLabel').click();
      cy.get('@packedItems').contains(text);
    })
  })

  it('should filter the items shown on the page', () => {
    cy.get('@filterInput').type('iPhone');

    cy.get('@allItems').should('contain.text', 'iPhone');
    cy.get('@allItems').should('not.contain.text', 'Hoodie');
  });
});
