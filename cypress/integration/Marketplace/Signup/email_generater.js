//cy.get(':nth-child(2) > :nth-child(2) > input').type(makeEmail())
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


    //cy.get(':nth-child(2) > :nth-child(2) > input').type(userID_Alpha())
function userID_Alpha() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }