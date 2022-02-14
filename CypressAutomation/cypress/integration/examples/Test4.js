/*For the auto suggestions in cypress */
/// <reference types="Cypress" /> 

describe('This is a suite',function(){
    it('this is a test case',function(){
        cy.visit('https://qaclickacademy.com/practice.php')
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        /*Window actions */
        cy.on('window:alert',(str) => 
        {
           /* Mocha */
           expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm',(str) =>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        /*Remove attribute and windows on same page */
        cy.get('#opentab').invoke('removeAttr','target').click()

        /**Check the url is correct  */
        cy.url().should('include','rahulshettyacademy')

        /**Browser back and forward */
        cy.go('back')
    })
})