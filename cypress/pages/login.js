export default class LoginPage {
  static emailInputLocator = 'input[name="email"]';
  static passwordInputLocator = 'input[name="password"]';
  static submitButtonLocator = 'button[type="submit"]';

  static visit() {
    cy.visit('/login');
  }

  static getEmailInput() {
    return cy.get(LoginPage.emailInputLocator).should('be.visible');
  }

  static getPasswordInput() {
    return cy.get(LoginPage.passwordInputLocator).should('be.visible');
  }

  static getSubmitButton() {  
    return cy.get(LoginPage.submitButtonLocator).should('be.visible');
  }

  static login(username, password) {
    LoginPage.getEmailInput().type(username);
    LoginPage.getPasswordInput().type(password);
    LoginPage.getSubmitButton().click();
  }
}