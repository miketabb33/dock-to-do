describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('#Add-Input').type('waz up')
    cy.get('#Add-Input-Button').click()
  })
})
