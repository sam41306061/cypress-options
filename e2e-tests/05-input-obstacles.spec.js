/// <reference types="cypress" />

describe('Input obstacles', () => {
  beforeEach(() => {
    cy.visit('/obstacle-course');
  });

  it('should input text into the input field', () => {
    const thought = 'Ravioli are a form of pop tart.';

    cy.get('[data-test="text-input"]').type(thought);
    cy.get('[data-test="text-result"]').contains(thought);
  });

  it('should control a select input', () => {

    cy.get('[data-test="select-input"]').select('Hulk');
    cy.get('[data-test="select-result"]').contains('Hulk');
  });

  it('should find and control a checkbox input', () => {
    cy.get('[data-test="checkbox-onion"]').check('Onion');
    cy.get('[data-test="checkbox-result"]').contains('Onion');
    cy.get('[data-test="checkbox-result"]');
  });

  it('should find and control a radio input', () => {
    cy.get('[data-test="radio-ringo"]').check('Ringo');
    cy.get('[data-test="radio-result"]').contains('Ringo');
  });

  it('should find and control a color input', () => {
    cy.get('[data-test="color-input"]').invoke('val', '#4400ff').trigger('input');
    cy.get('[data-test="color-result"]').contains('#4400ff');
  });

  it('should find and control a date input', () => {
    cy.get('[data-test="date-input"]');
    cy.get('[data-test="date-result"]');
  });

  it('should find and control a range input', () => {
    cy.get('[data-test="range-input"]');
    cy.get('[data-test="range-result"]');
  });

  it('should find and control a file input', () => {
    cy.get('[data-test="file-input"]');
    cy.get('[data-test="file-result"]');
  });
});
