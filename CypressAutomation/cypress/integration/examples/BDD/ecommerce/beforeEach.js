beforeEach(function()
{
      /**Run once before all the tests in the block */
      cy.fixture('example').then(function (data) {
        this.data = data;
    })
})