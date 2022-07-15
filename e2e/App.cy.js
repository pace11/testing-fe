/* eslint-disable no-undef */
describe('The Home Page', () => {
  before(() => {
    cy.visit('http://localhost:3200')
  })

  it('Validate title page', () => {
    const SAMPLE_TEXT = 'Notes'
    cy.get('div.content').contains('h2', SAMPLE_TEXT)
  })

  it('test for submiting notes', () => {
    const TITLE_TEXT = 'Efishery Notes 3'
    const CONTENT_TEXT =
      'Efishery Notes 3. Dolor enim aute et deserunt pariatur do eu Lorem cupidatat ullamco duis. Tempor id minim do commodo esse. Dolore voluptate elit qui cupidatat pariatur. Excepteur sunt velit sit ipsum adipisicing. Lorem culpa sint sit id. Consectetur magna do occaecat nostrud culpa aute occaecat id mollit dolor adipisicing labore.'
    // fill input form
    cy.get('input[name=title]').focus().clear().type(TITLE_TEXT).blur()
    cy.get('input[name=content]').focus().clear().type(CONTENT_TEXT).blur()

    // trigger with click button to submit
    cy.get('button.btn.primary[type=submit]').click()

    // validate if new submit data exist in dom
    cy.get('div.item').contains('h3', TITLE_TEXT)
  })

  it('test for deleting first notes', () => {
    let totalNotes

    cy.get('div.content-item').then((listWrapper) => {
      totalNotes = listWrapper.find('div.item').length
      cy.get('button.btn.danger').first().click()
    })

    cy.get('div.content-item').then((listWrapper) => {
      expect(listWrapper.find('div.item').length).to.be.eq(totalNotes - 1)
    })
  })
})
