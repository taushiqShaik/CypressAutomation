class HomePage {

    getEditBox() {
        return cy.get('form input[name="name"]')
    }
    getTwoWayBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }
    getGender(){
        return cy.get('form select[class="form-control"]')
    }
    getEnterprenure(){
        return  cy.get('#inlineRadio3')
    }
    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
    
}
/* "url" : "https://rahulshettyacademy.com/angularpractice/"*/
export default HomePage;