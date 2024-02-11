export default class ArticlePage {
  static articleTitleContainerLocator = '.container';
  static followButtonLocator = '.btn.btn-sm.action-btn.btn-outline-secondary';
  static favoriteButtonLocator = '.btn.btn-sm.btn-outline-primary';
  static authorLinkLocator = '.author';
  static articleDateLocator = '.date';
  static articleContentLocator = '.article-content';
  static tagListLocator = '.tag-list li';
  static editArticleButtonLocator = '.ion-edit';
  static deleteArticleButtonLocator = '.ion-trash-a';
  static commentTextAreaLocator = 'textarea[name="comment"]';
  static notAuthCommentSectionText = 'Sign in or Sign up to add comments on this article.';

  static getArticleTileContainer() {
    return cy.get(ArticlePage.articleTitleContainerLocator).should('be.visible');
  }

  static hasArticleTitle(title) {
    ArticlePage.getArticleTileContainer().contains(title);
  }

  static hasTitleText() {
    ArticlePage.getArticleTileContainer().should('not.be.empty');
  }

  static hasFollowButton() {
    ArticlePage.getArticleTileContainer().find(ArticlePage.followButtonLocator).should('exist');
  }

  static hasFavoriteButton() {
    ArticlePage.getArticleTileContainer().find(ArticlePage.favoriteButtonLocator).should('exist');
  }

  static hasEditButton() {
    return cy.get(ArticlePage.editArticleButtonLocator).should('exist');
  }

  static selectEditButton() {
    ArticlePage.hasEditButton().click();
  }

  static hasDeleteButton() {
    return cy.get(ArticlePage.deleteArticleButtonLocator).should('exist');
  }

  static selectDeleteButton() {
    ArticlePage.hasDeleteButton().click();
  }

  static getArticleContent() {
    return cy.get(ArticlePage.articleContentLocator).should('be.visible');
  }

  static hasArticleContent(text) {
    ArticlePage.getArticleContent().contains(text);
  }

  static hasArticleText() {
    ArticlePage.getArticleContent().should('not.be.empty');
  }

  static hasAuthorLink() {
    return cy.get(ArticlePage.authorLinkLocator).should('be.visible');
  }

  static hasDate() {
    return cy.get(ArticlePage.articleDateLocator).should('be.visible');
  }

  static hasTags() {
    return cy.get(ArticlePage.tagListLocator).should('be.visible');
  }

  static hasNotAuthCommentSection() {
    cy.contains(ArticlePage.notAuthCommentSectionText).should('exist');
  }

  static hasCommentTextArea() {
    cy.get(ArticlePage.commentTextAreaLocator).should('exist');
  }
}
