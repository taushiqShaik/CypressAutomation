/*For the auto suggestions in cypress */
/// <reference types="Cypress" /> 

describe('Checkboxes test suite',function(){
    it('test case of checbox',function(){
        /*Actions on CheckBoxes */
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[name="checkBoxOption1"]').as('checkBox1')
        cy.get('@checkBox1').check().should('be.checked').and('have.value','option1')
        cy.get('@checkBox1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option2','option3'])
        
        /*Actions on Static dropdowns */
        cy.get('select').select('option2').should('have.value','option2')

        /*Actions on Dynamic Dropdowns */
        cy.get('input#autocomplete').type('ind')
        
        cy.get('.ui-menu-item div')
        .each(($el, index, $list) => {
            // cy.wait(2500)
        if($el.text()==='India'){
            $el.click()
        }
        })
        cy.get('#autocomplete').should('have.value','India')

        /*Visible and in visible selection*/
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        /*Radio buttons */
        cy.get('input[value="radio2"]').check().should('be.checked')
    })
})