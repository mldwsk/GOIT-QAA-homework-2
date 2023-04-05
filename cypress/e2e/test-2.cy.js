/// <reference types="cypress" />

describe("GOIT homework 2, task 2", () => {
    it('logs in and out', () => {
      cy.visit("https://www.edu.goit.global/account/login");
      cy.login('testowyqa@qa.team', 'QA!automation-1');
      cy.get('#open-navigation-menu-mobile').click();
      cy.contains('button', 'Log out').click();
    })
  });