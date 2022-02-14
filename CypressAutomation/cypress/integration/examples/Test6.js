/*For the auto suggestions in cypress */
/// <reference types="Cypress" /> 

describe('This is a suite', function () {
    it('this is a test case', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')

        /** Mouse hover actions are not allowed in cypress instead use 
         * jquery*/        
       cy.get('div.mouse-hover-content').invoke('show')

       cy.contains('Top').click()
       cy.url().should('include','top')
       
        /** or force cllick*/
        cy.contains('Top').click({ force: true })
        cy.url().should('include', 'top')
    })
})