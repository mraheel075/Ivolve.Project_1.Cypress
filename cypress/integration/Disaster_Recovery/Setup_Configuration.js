
describe('Disaster Recovery Functionality', () => {

    it('Setup Configuration', () => {
        cy.visit('/')
        cy.get('#username').type("abc")
        cy.get('#password').type("abcabc")
        cy.get('.ant-btn').click()
        cy.contains('ant-notification-notice-with-icon').should("have.class", "ant-notification-notice-with-icon")
    })

  })
  