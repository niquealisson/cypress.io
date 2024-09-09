describe('Record and Play Suite', () => {
  it('Test1', () => {
    cy.visit('https://www.youtube.com')

    cy.get('input[id="search"]').type('nique alisson')
    cy.get('button[id="search-icon-legacy"]').click()
  })
})
