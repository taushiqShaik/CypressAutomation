/*For the auto suggestions in cypress */
/// <reference types="Cypress" /> 
/*For the auto suggestions in cypress */
/// <reference types="cypress-iframe" /> 
import 'cypress-iframe'
describe('Frame test', function () {
    it('iframe', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        cy.frameLoaded('iframe[id="courses-iframe"]')
         cy.iframe().find('a[href*="mentorship"]').eq(0).click()

         cy.iframe().find("h1[class='pricing-title text-white ls-1']").should('have.length',2)

    })
})