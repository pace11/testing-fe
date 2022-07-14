/* eslint-disable no-undef */
describe('The Home Page', () => {
  before(() => {
    cy.visit('http://localhost:3200')
  })
  it('successfully loads', () => {
    const SAMPLE_TEXT = 'Notes'
    cy.get('div.content').contains('h2', SAMPLE_TEXT)
  })
})
