
describe('Verify the Disaster Recovery Functionality', () => {

    it('Stage 1: Setup Configuration of Target cloud', () => {

        cy.fixture('Disaster_Recovery_Test_Data/Configuration_Setup.json').then((Configuration_Setup) => {

        const login_username = Configuration_Setup.login_username;
        const login_username_password = Configuration_Setup.login_username_password;

        const tusername = Configuration_Setup.tusername;
        const tusernamep = Configuration_Setup.tusername_password;
        const projectId = Configuration_Setup.projectId;
        const Internal_network_Id = Configuration_Setup.Internal_network_Id;
        const External_network_Id = Configuration_Setup.External_network_Id;
        const region = Configuration_Setup.regions;

        cy.login(login_username,login_username_password);
        cy.get('[style="display: flex;"] > .anticon > svg').click();
        cy.get('.Disaster_Recovery > span').click({requestTimeout: 15000});
        cy.get('.Disaster_Recovery_Dashboard').click({requestTimeout: 15000});
        cy.wait(10000)
        cy.get('.ant-btn').click();
        cy.wait(2000)
        cy.get('.ant-select-selection__placeholder').click();

        if (region) {
            cy.get('.ant-select-dropdown-menu-item-active').click();
          } 
          else {
            cy.get('.ant-select-dropdown-menu-item-active').click();
          }
        
        cy.wait(2000)
        cy.get('#username').click();
        cy.get('#username').type(tusername );
        cy.get('#password').type(tusernamep);
        cy.get('#targetProjectId').type(projectId);
        cy.get('#internalNetworkId').type(Internal_network_Id);
        cy.get('#externalNetworkId').type(External_network_Id);

        cy.get('.ant-modal-footer > div > .ant-btn-primary').click();

        cy.wait(10000)

        })
    
       
    })

    it.skip('Stage 2: Setup Configuration', () => {

        cy.fixture('Disaster_Recovery_Test_Data/Configuration_Setup.json').then((Configuration_Setup) => {

        const login_username = Configuration_Setup.login_username;
        const login_username_password = Configuration_Setup.login_username_password;



        cy.login(login_username,login_username_password);
        cy.get('[style="display: flex;"] > .anticon > svg').click();
     

        })
    
       
    })



  })

  




  