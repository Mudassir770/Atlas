// describe('Open Atlas WebApp and onboard a patient', () => {
//   it('Atlas', () => {
//     cy.viewport(1500, 814);
//     cy.visit('https://united.octdaily.com/public/login');
//     cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > div:nth-child(1) > input').clear().type('mudassir.hussain@octdaily.com');
//     cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > div:nth-child(2) > input').clear().type('123');
//     cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > p > button').click();
//     cy.get('#navwidth > div > ul > li:nth-child(2) > a > mat-icon').click();
//     cy.wait(5000);
//     cy.get('#mainwrap > app-header > header > nav > div.app-menu > ul > li:nth-child(2) > button').click();
//     cy.get('#Leadinfo > div.from-btnlist > div:nth-child(3) > div.d-flex.align-items-center.justify-content-between').click();
//     cy.get('#pdfTable > div:nth-child(2) > div > input').clear().type('Cypress'); // first name
//     cy.get('#pdfTable > div:nth-child(3) > div > input').clear().type('Test'); // last name
//     cy.get('#pdfTable > div:nth-child(4) > div > input').type('1990-12-31'); // dob
//     cy.get('#pdfTable > div:nth-child(5) > div > div > label:nth-child(4)').click();
//     cy.get('#pdfTable > div:nth-child(6) > div > input').clear().type('798793927'); // ssn
//     cy.get('#pdfTable > div:nth-child(7) > div > div > input').clear().type('6478774839'); // phone number duplication not allwed
//     cy.get('#pdfTable > div:nth-child(9) > div > input').clear().type('abcd@gmail.com');
//     cy.get('#pdfTable > div:nth-child(12) > div > textarea').clear().type('Test');
//     cy.get('#pdfTable > div:nth-child(14) > div > select').select('FL');
//     cy.get('#pdfTable > div:nth-child(16) > div > input').clear().type('456783235'); // zipcode
//     cy.get('#mat-select-value-1').click();
//     cy.get('#mat-option-5 > span').click();
//     cy.get('#pdfTable > div:nth-child(15) > div > input').clear().type('test');
//     cy.get('#pdfTable > div:nth-child(20) > div > input').clear().type('7943698'); //primry insurance id
//     cy.get('select[formcontrolname="referralSource"]').select('Other');
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.fornobrack.mob-visible > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-btn.ng-star-inserted > p > button.h_40.w-150.btn-primary.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base > span.mdc-button__label').click();
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.fornobrack.mob-visible > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-btn.ng-star-inserted > p > button.me-5.info.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-warn.mat-mdc-button-base.ng-star-inserted > span.mdc-button__label').click();
//   })
// })


// describe('Open Atlas WebApp and onboard a patient', () => {
//   it('Atlas', () => {
//     // Set viewport size
//     cy.viewport(1500, 814);

//     // Visit login page
//     cy.visit('https://united.octdaily.com/public/login');

//     // Log in with email and password
//     cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > div:nth-child(1) > input')
//       .clear().type('mudassir.hussain@octdaily.com');
//     cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > div:nth-child(2) > input')
//       .clear().type('123');
//     cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > p > button').click();

//     // Navigate to Leads section
//     cy.get('#navwidth > div > ul > li:nth-child(2) > a > mat-icon')
//       .click();
//     cy.wait(5000);  // Wait for page to load
//     cy.get('#mainwrap > app-header > header > nav > div.app-menu > ul > li:nth-child(2) > button')
//       .click();

//     // Start onboarding a new patient
//     cy.get('#Leadinfo > div.from-btnlist > div:nth-child(3) > div.d-flex.align-items-center.justify-content-between')
//       .click();

//     // Fill in patient details
//     cy.get('#pdfTable > div:nth-child(2) > div > input')
//       .clear().type('Cypress'); // First name
//     cy.get('#pdfTable > div:nth-child(3) > div > input')
//       .clear().type('Test'); // Last name
//     cy.get('#pdfTable > div:nth-child(4) > div > input')
//       .type('1990-12-31'); // Date of birth
//     cy.get('#pdfTable > div:nth-child(5) > div > div > label:nth-child(4)')
//       .click(); // Select gender
//     cy.get('#pdfTable > div:nth-child(6) > div > input')
//       .clear().type('796713627'); // SSN (Change this on each script run)
//     cy.get('#pdfTable > div:nth-child(7) > div > div > input')
//       .clear().type('647874518839'); // Phone number (Change this on each script run)
//     cy.get('#pdfTable > div:nth-child(9) > div > input')
//       .clear().type('abcd@gmail.com'); // Email
//     cy.get('#pdfTable > div:nth-child(12) > div > textarea')
//       .clear().type('Test'); // Address
//     cy.get('#pdfTable > div:nth-child(14) > div > select')
//       .select('FL'); // State
//     cy.get('#pdfTable > div:nth-child(16) > div > input')
//       .clear().type('456783235'); // Zipcode

//     // Insurance and referral information
//     cy.get('#mat-select-value-1')
//       .click();
//     cy.get('#mat-option-5 > span')
//       .click();
//     cy.get('#pdfTable > div:nth-child(15) > div > input')
//       .clear().type('test'); // Some field (test)
//     cy.get('#pdfTable > div:nth-child(20) > div > input')
//       .clear().type('7943698'); // Primary insurance ID
//     cy.get('select[formcontrolname="referralSource"]')
//       .select('Other'); // Referral source
//     cy.get('#iStateList')
//       .select('FL') // State

//     // Save the Form
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.fornobrack.mob-visible > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-btn.ng-star-inserted > p > button.h_40.w-150.btn-primary.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base > span.mdc-button__label')
//       .click();

//     // Submit to Opeerations
//     cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.fornobrack.mob-visible > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-btn.ng-star-inserted > p > button.me-5.info.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-warn.mat-mdc-button-base.ng-star-inserted > span.mdc-button__label')
//       .click();
//   });
// });


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
    cy.visit('https://united.octdaily.com/public/login');

    // Log in with email and password
    cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > div:nth-child(1) > input')
      .clear().type('mudassir.hussain@octdaily.com');
    cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > div:nth-child(2) > input')
      .clear().type('123');
    cy.get('body > app-root > app-public-layout > app-login-start > div > div > div > app-login2 > form > div > p > button').click();

    // Navigate to Leads section
    cy.get('#navwidth > div > ul > li:nth-child(2) > a > mat-icon')
      .click();
    cy.wait(5000);  // Wait for page to load
    cy.get('#mainwrap > app-header > header > nav > div.app-menu > ul > li:nth-child(2) > button')
      .click();

    // Start onboarding a new patient
    cy.get('#Leadinfo > div.from-btnlist > div:nth-child(3) > div.d-flex.align-items-center.justify-content-between')
      .click();

    // Fill in patient details
    cy.get('#pdfTable > div:nth-child(2) > div > input')
      .clear().type('Cypress'); // First name
    cy.get('#pdfTable > div:nth-child(3) > div > input')
      .clear().type('Test'); // Last name
    cy.get('#pdfTable > div:nth-child(4) > div > input')
      .type('1990-12-31'); // Date of birth
    cy.get('#pdfTable > div:nth-child(5) > div > div > label:nth-child(4)')
      .click(); // Select gender
    cy.get('#pdfTable > div:nth-child(6) > div > input')
      .clear().type(generateRandomSSN()); // Random SSN
    cy.get('#pdfTable > div:nth-child(7) > div > div > input')
      .clear().type(generateRandomPhoneNumber()); // Random phone number
    cy.get('#pdfTable > div:nth-child(9) > div > input')
      .clear().type('abcd@gmail.com'); // Email
    cy.get('#pdfTable > div:nth-child(12) > div > textarea')
      .clear().type('Test'); // Address
    cy.get('#pdfTable > div:nth-child(14) > div > select')
      .select('FL'); // State
    cy.get('#pdfTable > div:nth-child(16) > div > input')
      .clear().type('456783235'); // Zipcode

    // Insurance and referral information
    cy.get('#mat-select-value-1')
      .click();
    cy.get('#mat-option-5 > span')
      .click();
    cy.get('#pdfTable > div:nth-child(15) > div > input')
      .clear().type('test'); // Some field (test)
    cy.get('#pdfTable > div:nth-child(20) > div > input')
      .clear().type('7943698'); // Primary insurance ID
    cy.get('select[formcontrolname="referralSource"]')
      .select('UWI SNF'); // Referral source
    cy.get('#iStateList')
      .select('FL'); // State

    // Save the Form
    cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.fornobrack.mob-visible > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-btn.ng-star-inserted > p > button.h_40.w-150.btn-primary.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-primary.mat-mdc-button-base > span.mdc-button__label')
      .click();

    // Submit to Operations
    cy.get('#PatientsList > app-qa-dashboard > div > div > app-qa-leads > div > div > div > div.column.col.ps-md-0.leads_forms-wrap.fornobrack.mob-visible > div > div:nth-child(2) > div:nth-child(2) > div > div > app-qa-patient-info-form > div > div > form > div.form-btn.ng-star-inserted > p > button.me-5.info.mdc-button.mdc-button--raised.mat-mdc-raised-button.mat-warn.mat-mdc-button-base.ng-star-inserted > span.mdc-button__label')
      .click();
  });
});
