describe('ver', () => {

    it('test case 1', () => {
        
        
            cy.visit('https://www.globalsqa.com/samplepagetest/');
            cy.get('#g2599-name').type("abcsdfsd");
            cy.get('#g2599-email').type('abc@gmail.com')
        

    })

  })
  