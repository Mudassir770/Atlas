describe('Open Atlas WebApp and onboard a patient', () => {

  // Function to generate a random SSN number
  function generateRandomSSN() {
    return Math.floor(100000000 + Math.random() * 900000000).toString(); // 9-digit number
  }

  // Function to generate a random phone number
  function generateRandomPhoneNumber() {
    const areaCode = 239;  // 3-digit Florida area acode
    const Number = Math.floor(1000000 + Math.random() * 9000000); // 7-digit remaining number
    return `${areaCode}${Number}`; // 10-digit phone number
  }

  it('Atlas', () => {
    // Set viewport size
    cy.viewport(1500, 814);

    // Visit login page
    cy.visit('https://united.octdaily.com/public/login', {timeout: 120000, waitUntil: 'domcontentloaded'});
    // cy.wait(50000);

    // Log in with email and password
    cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > div:nth-child(1) > input')
      .clear().type('mudassir.hussain@octdaily.com');
    cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > div:nth-child(2) > input')
      .clear().type('123');
    cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > p > button').click();
    // Login 
    // cy.wait(5000);
    // cy.url().should('eq', 'https://united.octdaily.com/admin/dashboard');
    // login assertion
    cy.wait(10000);
    // cy.get('#mainwrap > app-header > header > nav > div.app-menu > ul > li').click();//,  {timeout: 120000, waitUntil: 'domcontentloaded'}).click(); // Hamburger Icon
    // cy.document().should('exist');
// cy.get('a.push-btn').click();
    // cy.get('#mainwrap > app-header > header > nav > div.app-menu > ul > li', { timeout: 120000 }).click();
    // cy.document().its('readyState').should('eq', 'complete'); // Ensure full page load

// cy.get('#mainwrap > app-header > header > nav > div.app-menu > ul > li')//, { timeout: 120000 })
//   .should('be.visible')  // Element is visible
//   .click(); 
    cy.get('#navwidth > div > ul > li:nth-child(2) > a').click(); // Patient Tab
    cy.wait(5000);
    cy.get('#mainwrap > app-header > header > nav > div.app-menu > ul > li:nth-child(2) > button').dblclick(); // New Case Button
    // cy.wait(7000);

    cy.get('#mat-select-value-1 > span').click(); //Select Fax Source
    cy.get('mat-option').contains('+16307577905 (intake@unitedwounds.org)').click(); //+16307577905 (intake@unitedwounds.org)
    cy.get('#mat-mdc-dialog-0 > div > div > app-lead-new-fax-source-option > form > div > button').click(); // OK button

    cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.drawer-wrapper > div.drawer-btn.docs').click();
    cy.wait(10000);
    cy.get('#Leadinfo > div.from-btnlist > div:nth-child(3)').click(); // Patient Information Button

    

    // Fill in patient details
    cy.get('#pdfTable > div:nth-child(3) > div > input')
      .clear().type('Mudassir'); // First name
    cy.get('#pdfTable > div:nth-child(4) > div > input')
      .clear().type('Test'); // Last name
    cy.get('#pdfTable > div:nth-child(5) > div > input')
      .type('1990-12-31'); // Date of birth
    cy.get('#pdfTable > div:nth-child(6) > div > div > label:nth-child(4)')
      .click(); // Select gender
    cy.get('#pdfTable > div:nth-child(7) > div > input')
      .clear().type(generateRandomSSN()); // Random SSN
    cy.get('#pdfTable > div:nth-child(8) > div > div > input')
      .clear().type(generateRandomPhoneNumber()); // Random phone number
    cy.get('#pdfTable > div:nth-child(10) > div > input')
      .clear().type('abcd@gmail.com'); // Email
    cy.get('#pdfTable > div:nth-child(13) > div > textarea')
      .clear().type('Test'); // Address
    cy.get('#pdfTable > div:nth-child(15) > div > select')
      .select('FL'); // State
    cy.get('#pdfTable > div:nth-child(16) > div > input')
      .type('Test'); // City
    cy.get('#pdfTable > div:nth-child(17) > div > input')
      .clear().type('456783235'); // Zipcode

    // Insurance and referral information
    cy.contains('div.mat-mdc-select-value', 'Primary Insurance')
      .should('be.visible')
      .click();

    cy.contains('.mat-mdc-option', '999')
      .should('be.visible')
      .click();
    
    cy.get('#pdfTable > div:nth-child(20) > div > input')
      .clear().type('7943698'); // Primary insurance ID
    cy.get('select[formcontrolname="referralSource"]')
      .select('SNF'); // Referral source
    cy.get('#iStateList')
      .select('Florida'); // State
    cy.get('#mat-select-value-7').click(); // Source Name
    cy.get('mat-option').contains('Mudassir').click();

    // Check Eligibility
    cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.rightpanright > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-btn.ipad-formbtn.ng-star-inserted > p > button.me-5.info.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-info.mat-mdc-button-base > span.mdc-button__label')
      .click();

    // Save Form
    cy.get('button.h_40.w-150.btn-primary') // or use the full selector if needed
      .click();

    // Submit to Operations
    cy.wait(5000);
    cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.rightpanright > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-btn.ipad-formbtn.ng-star-inserted > p > button.me-5.info.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-warn.mat-mdc-button-base.ng-star-inserted > span.mdc-button__label', { timeout: 10000 })
      .click();


     cy.get('#navwidth > div > ul > li:nth-child(2) > a').click(); // Patient Tab
 cy.wait(5000);


//                                              APS Appointment
    cy.reload();
    cy.wait(5000);
    cy.get("#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.drawer-wrapper > div.drawer-btn.docs").click();
    cy.get("#Leadinfo > div.from-btnlist > div:nth-child(4) > div.d-flex.align-items-center.justify-content-between.sssss").click();
    // Select Patient
    // cy.get("#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.drawer-wrapper > div.drawer-btn.docs").click();
    // cy.get("#Leadinfo > div.from-btnlist > div:nth-child(4) > div.d-flex.align-items-center.justify-content-between.sssss").click();
    cy.get('#Leadinfo > div.from-btnlist > div:nth-child(4) > div.d-flex.align-items-center.justify-content-between.sssss').click();
    // Select APS as per your own choice

    // APS
    // Open the dropdown    
    cy.wait(7000);
    cy.get('#mat-select-value-1 > span').click();
    // Select the desired option
    cy.get('mat-option').contains('Mudassir, Syed').click();


    // Medical Director
    cy.wait(3000);
    cy.get('#mat-select-2').click().type('Mudassir');
    // Select the desired option
    cy.get('mat-option').contains('Mudassir, Syed').click(); // Mudassir, Syed

    // Date for appoitment
    // Kindly change the date accordingly
    cy.get('#followupdate').type('2025-09-25T08:30') 
    // Date format is YYYY-MM-DD & T08:30 is the time of appointment in short 22nd october 2024 at 8:30 am

    // Step 1: Click to open the dropdown
    cy.get('#mat-select-value-5').click();
    // Step 2: Click the desired option from the dropdown
    cy.get('mat-option').contains('CANTERBURY ON THE LAKE SNF').click();

    // cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.rightpanright > div > div:nth-child(2) > div:nth-child(2) > div > div > app-appointmentsv2 > form > div > div.row.flex-wrap > div:nth-child(7) > div > select').select('Skilled Nursing Facility'); 
    // Wait until the dropdown contains the option
    cy.get('select[formcontrolname="ServiceLocationtype"] option', { timeout: 10000 })
      .should('contain.text', 'Skilled Nursing Facility');
    cy.get('select[formcontrolname="ServiceLocationtype"]')
      .select('Skilled Nursing Facility');


    // Service Location Type
    cy.get('#Notes').type('Test'); // Adding Notes
    cy.get('button[type="submit"].btn-primary').click(); // Save button

//                                              Provider Appointment(Debridement)

// Select Patient
    cy.get("#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.drawer-wrapper > div.drawer-btn.docs").click();
    // cy.get("#Leadinfo > div.from-btnlist > div:nth-child(4) > div.d-flex.align-items-center.justify-content-between.sssss").click();

// Select Provider as per your own choice
    cy.wait(7000);

    cy.get('select[formcontrolname="TreatmentType"]').select('Debridement'); // Debridement

    
    // Provider
   cy.wait(4000);
    cy.get('#mat-select-value-1').click();
    cy.wait(3000);
    // Select the desired option
    cy.get('mat-option').contains('Mudassir, Syed').click(); // Mudassir, Syed


    // Medical Director
    cy.wait(3000);
    cy.get('#mat-select-2').click().type('Mudassir');
    cy.wait(3000);
    // Select the desired option
    cy.get('mat-option').contains('Mudassir, Syed').click(); // Mudassir, Syed

    // Date for appoitment
    // Kindly change the date accordingly
    cy.get('#followupdate').type('2025-09-26T08:30') 
    // Date format is YYYY-MM-DD & T08:30 is the time of appointment in short 22nd october 2024 at 8:30 am

    // Step 1: Click to open the dropdown
    cy.get('#mat-select-value-5').click();
    // Step 2: Click the desired option from the dropdown
    cy.get('mat-option').contains('CANTERBURY ON THE LAKE SNF').click();

    // cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.rightpanright > div > div:nth-child(2) > div:nth-child(2) > div > div > app-appointmentsv2 > form > div > div.row.flex-wrap > div:nth-child(7) > div > select').select('Skilled Nursing Facility'); 
    // Wait until the dropdown contains the option
    cy.get('select[formcontrolname="ServiceLocationtype"] option', { timeout: 10000 })
      .should('contain.text', 'Skilled Nursing Facility');
    cy.get('select[formcontrolname="ServiceLocationtype"]')
      .select('Skilled Nursing Facility');


    // Service Location Type
    cy.get('#Notes').type('Test'); // Adding Notes
    cy.get('button[type="submit"].btn-primary').click(); // Save button

//                                              Provider Appointment(Progress Evaluation)

// Select Patient
    cy.get("#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.drawer-wrapper > div.drawer-btn.docs").click();
    // cy.get("#Leadinfo > div.from-btnlist > div:nth-child(4) > div.d-flex.align-items-center.justify-content-between.sssss").click();

// Select Provider as per your own choice
    cy.wait(7000);

    cy.get('select[formcontrolname="TreatmentType"]').select('Progress Evaluation'); // Progress Evaluation

    
    // Provider
   cy.wait(4000);
    cy.get('#mat-select-value-1').click();
    cy.wait(3000);
    // Select the desired option
    cy.get('mat-option').contains('Mudassir, Syed').click(); // Mudassir, Syed


    // Medical Director
    cy.wait(3000);
    cy.get('#mat-select-2').click().type('Mudassir');
    cy.wait(3000);
    // Select the desired option
    cy.get('mat-option').contains('Mudassir, Syed').click(); // Mudassir, Syed

    // Date for appoitment
    // Kindly change the date accordingly
    cy.get('#followupdate').type('2025-09-27T08:30') 
    // Date format is YYYY-MM-DD & T08:30 is the time of appointment in short 22nd october 2024 at 8:30 am

    // Step 1: Click to open the dropdown
    cy.get('#mat-select-value-5').click();
    // Step 2: Click the desired option from the dropdown
    cy.get('mat-option').contains('CANTERBURY ON THE LAKE SNF').click();

    // cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.rightpanright > div > div:nth-child(2) > div:nth-child(2) > div > div > app-appointmentsv2 > form > div > div.row.flex-wrap > div:nth-child(7) > div > select').select('Skilled Nursing Facility'); 
    // Wait until the dropdown contains the option
    cy.get('select[formcontrolname="ServiceLocationtype"] option', { timeout: 10000 })
      .should('contain.text', 'Skilled Nursing Facility');
    cy.get('select[formcontrolname="ServiceLocationtype"]')
      .select('Skilled Nursing Facility');


    // Service Location Type
    cy.get('#Notes').type('Test'); // Adding Notes
    cy.get('button[type="submit"].btn-primary').click(); // Save button


//                                              Provider Appointment(Advanced Assesment)

// Select Patient
    cy.get("#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.drawer-wrapper > div.drawer-btn.docs").click();
    // cy.get("#Leadinfo > div.from-btnlist > div:nth-child(4) > div.d-flex.align-items-center.justify-content-between.sssss").click();

// Select Provider as per your own choice
    cy.wait(7000);

    cy.get('select[formcontrolname="TreatmentType"]').select('Advanced Assessment'); // Advanced Assessment

    
    // Provider
   cy.wait(4000);
    cy.get('#mat-select-value-1').click();
    cy.wait(3000);
    // Select the desired option
    cy.get('mat-option').contains('Mudassir, Syed').click(); // Mudassir, Syed


    // Medical Director
    cy.wait(3000);
    cy.get('#mat-select-2').click().type('Mudassir');
    cy.wait(3000);
    // Select the desired option
    cy.get('mat-option').contains('Mudassir, Syed').click(); // Mudassir, Syed

    // Date for appoitment
    // Kindly change the date accordingly
    cy.get('#followupdate').type('2025-09-28T08:30') 
    // Date format is YYYY-MM-DD & T08:30 is the time of appointment in short 22nd october 2024 at 8:30 am

    // Step 1: Click to open the dropdown
    cy.get('#mat-select-value-5').click();
    // Step 2: Click the desired option from the dropdown
    cy.get('mat-option').contains('CANTERBURY ON THE LAKE SNF').click();

    // cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div.rightpanright > div > div:nth-child(2) > div:nth-child(2) > div > div > app-appointmentsv2 > form > div > div.row.flex-wrap > div:nth-child(7) > div > select').select('Skilled Nursing Facility'); 
    // Wait until the dropdown contains the option
    cy.get('select[formcontrolname="ServiceLocationtype"] option', { timeout: 10000 })
      .should('contain.text', 'Skilled Nursing Facility');
    cy.get('select[formcontrolname="ServiceLocationtype"]')
      .select('Skilled Nursing Facility');


    // Service Location Type
    cy.get('#Notes').type('Test'); // Adding Notes
    cy.get('button[type="submit"].btn-primary').click(); // Save button

  });
});
