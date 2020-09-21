
describe('Signup Functionality', () => {

    it('Test case 1', () => {
        cy.visit('http://10.81.1.40/')
        cy.get('.header-signin-button').click()
        cy.get('b > a').click()
        cy.get('#firstname').type('abc')
        cy.get('#lastname').type('abc')
        cy.get('#username').type(userID_Alpha())

function makeEmail() { 
    var strValues="abcdefg12345"; 
    var strEmail = ""; 
    var strTmp; 
    for (var i=0;i<10;i++) { 
    strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
    strEmail = strEmail + strTmp; 
    } 
    strTmp = ""; 
    strEmail = strEmail + "@"; 
    for (var j=0;j<8;j++) { 
    strTmp = strValues.charAt(Math.round(strValues.length*Math.random())); 
    strEmail = strEmail + strTmp; 
    } 
    strEmail = strEmail + ".com" 
    return strEmail; 
    } 

function userID_Alpha() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }   

function getRandom(length) {

        return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
        
        }

        cy.get('#email').type(makeEmail())
        cy.get('#password').type('ADadmin0101@')
        cy.get('#ConfirmPassword').type('ADadmin0101@')
        cy.get('#companyName').type('abcabc')
        cy.get('.arrow').click()

        cy.get('.is-invalid > .form-control').clear().type('+92'+getRandom(11))
        cy.get('.form-check-input').click()
        cy.get('.signup-brn').click().wait(5000)

        

    })

    it('Test case 2', () => {

        cy.visit('http://10.81.1.40/')
        cy.get('.header-signin-button').click()
        cy.get('b > a').click()
        cy.get('.signup-brn').click({ force: true })
        
    })



  })
  