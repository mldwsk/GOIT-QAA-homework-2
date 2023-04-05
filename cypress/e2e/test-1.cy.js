/// <reference types="cypress" />

describe("GOIT homework 2, task 1", () => {
  it('logs in and out', () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login('user888@gmail.com', '1234567890');
    cy.get('#open-navigation-menu-mobile').click();
    cy.contains('button', 'Log out').click();
  })
});