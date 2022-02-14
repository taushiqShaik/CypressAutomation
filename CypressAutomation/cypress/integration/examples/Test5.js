/*For the auto suggestions in cypress */
/// <reference types="Cypress" /> 

describe('This is a suite',function(){
    it('this is a test case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
        
        // cy.get('Master Selenium Automation in simple Python Language')
        
        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>
        {
           const text = $el.text()
           if(text.includes("Python"))
           {
               cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
               {
                const priceText = price.text()
                expect(priceText).to.equal('25')
               })
           }
        })
    })
})