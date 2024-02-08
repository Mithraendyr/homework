export default class MainPage {
    static signInButtonLocator = 'a[href="/login"]';
    static signUpButtonLocator = 'a[href="/register"]';
    static userPictureLocator = '.user-pic';
    static feedContainerLocator = '.col-md-9';
    static emptyFeedTextLocator = 'No articles are here... yet.';

    static visit() {
      cy.visit('/');
    }

    static getSignInButton() {
      return cy.get(MainPage.signInButtonLocator).should('be.visible');
    }

    static getSignUpButton() {
      return cy.get(MainPage.signUpButtonLocator).should('be.visible');
    }

    static selectSignIn() {
      MainPage.getSignInButton().click();
    }

    static selectSignUp() {
      MainPage.getSignUpButton().click({force: true});
    }

    static hasUserPicture() {
      cy.get(MainPage.userPictureLocator).should('be.visible');
    }

    static verifyUserIsLoggedIn() {
      MainPage.hasUserPicture();
    }

    static verifyUserhasNoPersonalFeed() {
      cy.get(MainPage.feedContainerLocator).contains(MainPage.emptyFeedTextLocator);
    }
}