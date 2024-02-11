export default class MainPage {
  static signInButtonLocator = 'a[href="/login"]';
  static signUpButtonLocator = 'a[href="/register"]';
  static newArticleButtonLocator = 'a[href="/editor"]';
  static userPictureLocator = '.user-pic';
  static feedContainerLocator = '.col-md-9';
  static articlePreviewLocator = '.article-preview';
  static articlePreviewLinkLocator = '.preview-link';
  static authorLocator = '.author';
  static dateLocator = '.date';
  static emptyFeedTextLocator = 'No articles are here... yet.';
  static selectedFeedLocator = 'active';
  static tagListLocator = '.tag-list li';
  static yourFeedText = 'Your Feed';
  static globalFeedText = 'Global Feed';
  static paginationLocator = '.pagination';
  static defaultArticlesCount = 10;

  static visit() {
    cy.visit('/');
  }

  static getSignInButton() {
    return cy.get(MainPage.signInButtonLocator).should('be.visible');
  }

  static getSignUpButton() {
    return cy.get(MainPage.signUpButtonLocator).should('be.visible');
  }

  static getNewArticleButton() {
    return cy.get(MainPage.newArticleButtonLocator).should('be.visible');
  }

  static selectSignIn() {
    MainPage.getSignInButton().click();
  }

  static selectSignUp() {
    MainPage.getSignUpButton().click({ force: true });
  }

  static selectNewArticle() {
    MainPage.getNewArticleButton().click();
  }

  static hasUserPicture() {
    cy.get(MainPage.userPictureLocator).should('be.visible');
  }

  static verifyUserPictureDisplayed() {
    MainPage.hasUserPicture();
  }

  static verifyUserHasNoPersonalFeed() {
    cy.get(MainPage.feedContainerLocator).contains(MainPage.emptyFeedTextLocator);
  }

  static getPreviewArticles() {
    return cy.get(MainPage.articlePreviewLocator).should('be.visible');
  }

  static hasTenPreviewArticles() {
    MainPage.getPreviewArticles().should('have.length', MainPage.defaultArticlesCount);
  }

  static getActiveFeed() {
    return cy.get(MainPage.selectedFeedLocator).should('exist');
  }

  static hasUserFeedSelected() {
    cy.contains(MainPage.yourFeedText).should('have.class', MainPage.selectedFeedLocator);
  }

  static hasGlobalFeedSelected() {
    // MainPage.getActiveFeed().contains(MainPage.globalFeedText);
    cy.contains(MainPage.globalFeedText).should('have.class', MainPage.selectedFeedLocator);
  }

  static getPreviewLinks() {
    return cy.get(MainPage.articlePreviewLinkLocator).should('be.visible');
  }

  static selectFirstArticle() {
    MainPage.getPreviewLinks().first().click();
  }

  static hasAuthorInPreviewArticle() {
    MainPage.tagListLocator.should('be.visible');
  }

  static hasTagListInPreviewArticle() {
    cy.get('h1').should('be.visible');
  }

  static hasTextInPreviewArticle() {
    cy.get('p').should('be.visible');
  }

  static hasTitleForPreviewArticle() {
    MainPage.getPreviewArticles().contains(title).should('be.visible');
  }

  static hasDataInEachPreviewArticle() {
    MainPage.getPreviewArticles().each(() => {
      MainPage.hasAuthorInPreviewArticle();
      MainPage.hasTagListInPreviewArticle();
      MainPage.hasTitleForPreviewArticle();
      MainPage.hasTextInPreviewArticle();
    });
  }

  static hasPagination() {
    cy.get(MainPage.paginationLocator).should('exist');
  }

  static hasNoPagination() {
    cy.get(MainPage.paginationLocator).should('not.exist');
  }
}