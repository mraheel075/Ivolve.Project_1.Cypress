
cy.get('.is-invalid > .form-control').clear().type('+92'+getRandom(11))
function getRandom(length) {

    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
    
    }