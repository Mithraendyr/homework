export default class EditorPage {
  static articleTitleLocator = 'input[name="articleTitle"]';
  static articleDescriptionLocator = 'input[name="description"]';
  static articleBodyLocator = 'textarea[name="body"]';
  static articleTagsLocator = 'input[name="tags"]';
  static publishButtonLocator = 'button:contains("Publish Article")';

  static visit() {
    cy.visit('/editor');
  }

  static getArticleTitle() {
    return cy.get(EditorPage.articleTitleLocator).should('be.visible');
  }

  static getArticleDescription() {
    return cy.get(EditorPage.articleDescriptionLocator).should('be.visible');
  }

  static getArticleBody() {
    return cy.get(EditorPage.articleBodyLocator).should('be.visible');
  }

  static getArticleTags() {
    return cy.get(EditorPage.articleTagsLocator).should('be.visible');
  }

  static getPublishButton() {
    return cy.get(EditorPage.publishButtonLocator).should('be.visible');
  }

  static typeArticleTitle(title) {
    EditorPage.getArticleTitle().type(title);
  }

  static typeArticleDescription(description) {
    EditorPage.getArticleDescription().type(description);
  }

  static typeArticleBody(body) {
    EditorPage.getArticleBody().type(body);
  }

  static typeArticleTags(tags) {
    EditorPage.getArticleTags().type(tags);
  }

  static clickPublishButton() {
    EditorPage.getPublishButton().click();
  }

  static createArticle(title, description, body, tags) {
    EditorPage.typeArticleTitle(title);
    EditorPage.typeArticleDescription(description);
    EditorPage.typeArticleBody(body);
    EditorPage.typeArticleTags(tags);
    EditorPage.clickPublishButton();
  }
}
