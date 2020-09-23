
describe('Verify the Disaster Recovery Functionality', () => {

    it('Stage 1: Setup Configuration', () => {

        cy.fixture('Disaster_Recovery_Test_Data/Configuration_Setup.json').then((Configuration_Setup) => {

        const login_username = Configuration_Setup.login_username;
        const login_username_password = Configuration_Setup.login_username_password;



        cy.login(login_username,login_username_password);
        cy.get('[style="display: flex;"] > .anticon > svg').click();
     

        })
    
       
    })

    it('Stage 2: Setup Configuration', () => {

        cy.fixture('Disaster_Recovery_Test_Data/Configuration_Setup.json').then((Configuration_Setup) => {

        const login_username = Configuration_Setup.login_username;
        const login_username_password = Configuration_Setup.login_username_password;



        cy.login(login_username,login_username_password);
        cy.get('[style="display: flex;"] > .anticon > svg').click();
     

        })
    
       
    })



  })

  
describe('Verify the Disaster Recovery Functionality 2', () => {

    it('Stage 1: Setup Configuration', () => {

        cy.fixture('Disaster_Recovery_Test_Data/Configuration_Setup.json').then((Configuration_Setup) => {

        const login_username = Configuration_Setup.login_username;
        const login_username_password = Configuration_Setup.login_username_password;



        cy.login(login_username,login_username_password);
        cy.get('[style="display: flex;"] > .anticon > svg').click();
     

        })
    
       
    })

    it('Stage 2: Setup Configuration', () => {

        cy.fixture('Disaster_Recovery_Test_Data/Configuration_Setup.json').then((Configuration_Setup) => {

        const login_username = Configuration_Setup.login_username;
        const login_username_password = Configuration_Setup.login_username_password;



        cy.login(login_username,login_username_password);
        cy.get('[style="display: flex;"] > .anticon > svg').click();
     

        })
    
       
    })



  })
  