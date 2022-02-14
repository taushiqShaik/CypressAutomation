import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage';

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homePageObj = new HomePage()
const productPageObj = new ProductPage()

Given('I open ECommerce Page', () => {
    cy.visit(Cypress.env('url'))
})

When('I add items to cart', function () {
    homePageObj.getShopTab().click()
    /**Custom cypress commands */
    //    cy.selectProduct('Blackberry')
    //    cy.selectProduct('Nokia Edge')

    this.data.productName.forEach(element => {
        cy.selectProduct(element)
    });

    /**Object creation for ProductPage */
    /*const productPageObj = new ProductPage()*/
    productPageObj.checkOutButton().click()
})

And('Validate the total prices', () => {
    var sum = 0
    productPageObj.listOfCart().each(($el, index, $list) => {
        const amount = $el.text()
        var res = amount.split(" ")
        res = res[1].trim()
        sum = Number(sum) + Number(res)
        cy.log(amount)
    }).then(function () /** Resolve the promise otherwise the log.sum will print as Cypress runs in asynchronus mode */ {
        cy.log(sum)
    })

    productPageObj.totalAmount().then(function (element) {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(sum)
    })
})
Then('select the country submit and verify Thankyou', () => {

    productPageObj.checkOutButton2().click()
    /*Explicit wait*/
    //    Cypress.config('',8000)
    /**It is recommended to have global wait declaration in cypress.json file */
    productPageObj.typeIndia().type('India')
    productPageObj.selectContry().click()
    // productPageObj.acceptAgree().click({force:true})
    productPageObj.acceptAgree().click()
    productPageObj.purchase().click()
    // productPageObj.validateText().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    /**Assertions */
    productPageObj.validateText().then(function (element) {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    })

})

When('I fill the form details', function(dataTable) {
    /* input[name='name']:nth-child(2) */
    // cy.get('form input[name="name"]').type("BoB")
    // cy.get('form input[name="name"]').type(this.data.name)
    // cy.get('form select[class="form-control"]').select('Female')
    // cy.get('form select[class="form-control"]').select(this.data.gender)
    // homePageObj.getEditBox().type(this.data.name)
    // homePageObj.getGender().select(this.data.gender)

    /**[[name, gender],[Robin, Male]] */
    homePageObj.getEditBox().type(dataTable.rawTable[1][0])
    homePageObj.getGender().select(dataTable.rawTable[1][1])

})

Then('Validate the forms behaviour', function()  {
    /**Validating property */
    // cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
    homePageObj.getTwoWayBinding().should('have.value', this.data.name)
    /**Validating attribute */
    cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2')

    /**Validating behaviour */
    // cy.get('#inlineRadio3').should('be.disabled')
    homePageObj.getEnterprenure().should('be.disabled')

})

And('select the shop page', () => {
    /**Debug */
    // cy.get('#inlineRadio3').should('be.disabled').debug()
    /*Pause*/
    // cy.pause()
    homePageObj.getShopTab().click()
})