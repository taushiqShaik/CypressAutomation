/// <reference types="Cypress" />

describe('My First test Suite', function () {
    it('My first test run', function () {
        cy.visit("https://rahulshettyacademy.com")
        cy.get('.search-keyword').type('CA')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        // cy.get(`.//*contains[text(),'Carrot']`)
        // cy.get(`.product-action > button`).contains("Carrot")
        // cy.contains(`h4[class="product-name", 'Carrot'`)
        // cy.get(`h4[class='product-name']:contains('Carrot')`).siblings('.product-action > button')


        /*Aliasing */
        cy.get('div.products').as('productLocator')

        /*Parent Child chaining */
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()

        /*From the open selector playground*/
        cy.get(':nth-child(3) > .product-action > button').click().then(function () {
            console.log('synch print of log')       /*Sync print of console log*/
        })

        /* async Console.log*/
        console.log('async print')

        /*Through dynamically driven*/
        cy.get('@productLocator').find('.product')
            .each(($el, index, $list) => {
                const textVeg = $el.find('h4.product-name').text()
                if (textVeg.includes('Cashews')) {
                    $el.find('button').click()
                }

                /*Assert if logo text is correctly printed*/
                cy.get('.brand').should('have.text', 'GREENKART')
                /*Anything other than Cypress commands can not be resolved by themselves we should use the conebtional method to resolve the promise*/
                cy.get('.brand').then(function (logoElemnt) {
                    cy.log(logoElemnt.text())
                })
            })
    })
})