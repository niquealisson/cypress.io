describe('Cypress Assertion Suite',()=>{
    it('Test Case Assert 1', () => {
        cy.visit('https://www.google.com/search?q=nique+alisson+cypress')

        cy.get('textarea[id="APjFqb"]').then((element)=>{
            expect(element.text()).to.equal('nique alisson cypress')
        })
    })
})