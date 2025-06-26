describe('Open Atlas WebApp and create appointments and encounters', () => {

  it('Atlas', () => {
    // Set viewport size
    cy.viewport(1440, 766); // Full HD resolution

    // Visit login page
    cy.visit('xyz');

    // Log in with email and password
    cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > div:nth-child(1) > input')
      .clear().type('mudassir.hussain@octdaily.com');
    cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > div:nth-child(2) > input')
      .clear().type('123');
    cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > p > button').click();

    // Switching the role to IVR 
    cy.get('#mainwrap > app-header > header > nav > div.navbar-custom-menu.r-side > ul > li.dropdown.user.user-menu > a > div').click();
    cy.get('#mainwrap > app-header > header > nav > div.navbar-custom-menu.r-side > ul > li.dropdown.user.user-menu > ul > li > div.scroll-bar > a:nth-child(18)').click();

    // Going to IVR tab  now 
    cy.get('#mainwrap > app-header > header > nav > div.app-menu > ul > li.btn-group.nav-item > a').click();
    cy.wait(2000);
    cy.get('#navwidth > div > ul > li:nth-child(6) > a').dblclick();

    cy.wait(5000);
    // Changing the IVR status
    cy.get('#PatientsList > app-ivr-layout > app-list > div > div > div > div.box-body.p-0 > div > div.mat-elevation-z8.table-responsive.stickRow > table > tbody > tr:nth-child(1) > td.mat-mdc-cell.mdc-data-table__cell.cdk-cell.cdk-column-IVRStatusName.mat-column-IVRStatusName.ng-star-inserted > a').dblclick();
    cy.get('.mat-mdc-tooltip-trigger.btn-link.pointer.text-primary').contains('To Do').click();
    cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > mat-dialog-content > div.form-group.mb-3.d-flex.flex-wrap > div:nth-child(3) > label').click(); // Commercial
    cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > mat-dialog-content > div:nth-child(3) > select').select('YELLOW'); //Medical Group
    cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > mat-dialog-content > div:nth-child(5) > select').select('Approved'); // IVR status approved
    // cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > mat-dialog-content > div:nth-child(5) > select').select('In-progress'); // IVR status In Progress 
    // cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > mat-dialog-content > div:nth-child(5) > select').select('To-Do'); // IVR status To DO
    // cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > mat-dialog-content > div:nth-child(5) > select').select('Declined'); // IVR status Declined
    // cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > mat-dialog-content > div:nth-child(5) > select').select('Caution'); // IVR status Caution
    // cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > mat-dialog-content > div:nth-child(5) > select').select('Prior Auth'); // IVR status Prior Auth
    cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > mat-dialog-content > div.form-group.mb-3.ng-star-inserted > div > div > ng-multiselect-dropdown > div > div:nth-child(1) > span').click();
    cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > mat-dialog-content > div.form-group.mb-3.ng-star-inserted > div > div > ng-multiselect-dropdown > div > div.dropdown-list > ul.item1 > li.filter-textbox.ng-star-inserted > input').click().type('S, Mudassir');
    cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > mat-dialog-content > div.form-group.mb-3.ng-star-inserted > div > div > ng-multiselect-dropdown > div > div.dropdown-list > ul.item2 > li').click();
    cy.get('#mat-mdc-dialog-0 > div > div > app-status-change > form > div > button').click(); // Save Button
    cy.get('#mainwrap > app-header > header > nav > div.app-menu > ul > li.btn-group.nav-item > a').click();



    // Switching the role to ROC
    cy.get('#mainwrap > app-header > header > nav > div.navbar-custom-menu.r-side > ul > li.dropdown.user.user-menu > a > div').click();
    cy.get('#mainwrap > app-header > header > nav > div.navbar-custom-menu.r-side > ul > li.dropdown.user.user-menu > ul > li > div.scroll-bar > a:nth-child(8)').click();

    //                                            APS Appointment
    // Select Patient
    cy.get('#customerListWrap > app-shared-lead-list > div.pb-3 > div > div.active.media-list.wound.w_oth.ng-star-inserted > div').click();
    cy.get('#Leadinfo > div.from-btnlist > div:nth-child(4) > div.d-flex.align-items-center.justify-content-between > span > img').click();
    // Select APS as per your own choice
    cy.wait(7000);
    cy.get("#mat-select-0").click().type('Mudassir');
    cy.get("#mat-option-31").click(); // Mudassir, S

    // Medical Director
    cy.wait(3000);
    cy.get('#mat-select-2').click().type('Mudassir');
    cy.get('#mat-option-19').click(); // Mudassir, S

    // Date for appoitment
    // Kindly change the date accordingly
    cy.get('#followupdate').type('2024-10-27T08:30') 
    // Date format is YYYY-MM-DD & T08:30 is the time of appointment in short 22nd october 2024 at 8:30 am

    cy.get('#validationTooltip01').select('Home'); // Service Location Type
    cy.get('select#validationTooltip01[name="PlaceOfService"]').select('Home'); // Place of Service
    cy.get('#Notes').type('Test'); // Adding Notes
    cy.get('button[type="submit"].btn-primary').click(); // Save button

    
//                                       Provider Appointment

        // Select Patient
        cy.get('#customerListWrap > app-shared-lead-list > div.pb-3 > div > div.active.media-list.wound.w_oth.ng-star-inserted > div').click();
        cy.get('#Leadinfo > div.from-btnlist > div:nth-child(4) > div.d-flex.align-items-center.justify-content-between > span > img').click();
        // Select APS as per your own choice
        cy.wait(7000);
        cy.get("#mat-select-0").click().type('Mudassir');
        cy.get("#mat-option-31").click(); // Mudassir, S
        
        // Medical Director
        cy.wait(3000);
        cy.get('#mat-select-2').click().type('Mudassir');
        cy.get('#mat-option-19').click(); // Mudassir, S

        // Date for appoitment
        // Kindly change the date accordingly
        cy.get('#followupdate').type('2024-10-27T08:30') 
        // Date format is YYYY-MM-DD & T08:30 is the time of appointment in short 22nd october 2024 at 8:30 am

        cy.get('#validationTooltip01').select('Home'); // Service Location Type
        cy.get('select#validationTooltip01[name="PlaceOfService"]').select('Home'); // Place of Service
        cy.get('#Notes').type('Test'); // Adding Notes
        cy.get('button[type="submit"].btn-primary').click(); // Save button


  });
});
