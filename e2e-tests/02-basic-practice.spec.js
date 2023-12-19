/// <reference types="cypress" />

describe('Create a New Item', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  });
  describe('Check the page for the following elements', () =>{
    it('should have a form', () => {
        cy.get('[data-test="new-item-input"]');
        cy.get('[data-test="filter-items"]');
      });
    
      it('should have the words "Add Item"', () => {
        cy.contains('Add Item');
      });
  })
 describe('Add items to the upacked list', () =>{
    it('should put stuff in the input feild', () => {
        // store data as variables
        const newItem = 'A Good Attitude!!';
    
        cy.get('[data-test="new-item-input"]').type(newItem);
        cy.get('[data-test="add-item"]').click();
        cy.contains(newItem);
      });
 });
  describe('Filter the list of items', () =>{
    it('should filter the items that are on the page', () => {
        const checkItem = 'Tooth Paste';
        cy.get('[data-test="filter-items"]').type(checkItem);
        cy.get('[data-test="filter-items"]').clear();
      });
  });
  describe('Check and uncheck items in the list', () =>{
    it('uncheck packed items', () => {
        const hoodie = '#item-5';
        cy.get(hoodie).click(); // hoodie
      });
      it('check and move a bunch of items over to "packed" section', () => {
        const toothPaste = '#item-2';
        cy.get(toothPaste).click(); // toothPaste 
        cy.contains('Tooth Paste');
      });
  });
  // missed "remove all items"
});
