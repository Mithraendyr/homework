export default class SignUpPage {
  static usernameInputLocator = 'input[name="username"]';
  static emailInputLocator = 'input[name="email"]';
  static passwordInputLocator = 'input[name="password"]';
  static submitButtonLocator = 'button[type="submit"]';

  static visit() {
    cy.visit('/register');
  }

  static isAt() {
    cy.url().should('include', '/register');
  }

  static getUsernameInput() {
    return cy.get(SignUpPage.usernameInputLocator).should('be.visible');
  }

  static getEmailInput() {
    return cy.get(SignUpPage.emailInputLocator).should('be.visible');
  }

  static getPasswordInput() {
    return cy.get(SignUpPage.passwordInputLocator).should('be.visible');
  }

  static getSubmitButton() {  
    return cy.get(SignUpPage.submitButtonLocator).should('be.visible');
  }

  static signup(username, email, password) {
    SignUpPage.getUsernameInput().type(username);
    SignUpPage.getEmailInput().type(email);
    SignUpPage.getPasswordInput().type(password);
    SignUpPage.getSubmitButton().click();
  }
}