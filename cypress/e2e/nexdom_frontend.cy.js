Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Validação do site da NEXDOM - Front-end simplificado', () => {

  it('Cenário 1 - Validar página "Sobre Nós"', () => {
    cy.visit('https://nexdom.tec.br/sobre-nos/', { failOnStatusCode: false })

    // Valida se o footer está visível
    cy.get('footer').should('be.visible')

    // Scroll até o final da página
    cy.scrollTo('bottom')
  })

  it('Cenário 2 - Validar página "Ressarcimento ao SUS"', () => {
    cy.visit('https://nexdom.tec.br/ressarcimento-ao-sus/', { failOnStatusCode: false })

    // Valida se o footer está visível
    cy.get('footer').should('be.visible')

    // Scroll até o final da página
    cy.scrollTo('bottom')
  })

})
