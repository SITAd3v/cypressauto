describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('#W0wltc > .QS5gu').click()
    cy.get('#APjFqb').type('amazon.com')
    cy.contains('Sök på Google').click()
    cy.title().should('eq', 'amazon.com - Google Search')
    //cy.get('#onetrust-accept-btn-handler').click()
    //cy.get('.DefinitionList-module--definitionList__HdGKg > :nth-child(3) > .CTA-module--action__1qN9s').click()
  })
})