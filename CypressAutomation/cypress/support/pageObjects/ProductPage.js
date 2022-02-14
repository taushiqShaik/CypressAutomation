class ProductPage {

    checkOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    listOfCart(){
        return cy.get('tr td:nth-child(4) strong')
    }
    totalAmount(){
        return cy.get('h3 strong')
    }
    checkOutButton2() {
        return cy.get('button[class="btn btn-success"]')
    }
    selectContry() {
        return cy.get('.suggestions > ul > li > a')
    }
    typeIndia() {
        return cy.get('#country')
    }
    acceptAgree() {
        // return cy.get('#checkbox2') force true
        return cy.get('.checkbox > label')
    }
    purchase() {
        return cy.get('input[value="Purchase"]')
    }
    validateText(){
        return cy.get('.alert')
    }
}

export default ProductPage;