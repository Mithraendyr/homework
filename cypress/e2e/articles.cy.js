import ArticlePage from "../pages/article";
import LoginPage from "../pages/login";
import MainPage from "../pages/main";
import EditorPage from "../pages/editor";

describe('Article flows', function() {
    beforeEach(() => cy.visit(''));

    it('Reading article', function() {
        MainPage.hasGlobalFeedSelected();
        MainPage.hasTenPreviewArticles();
        MainPage.selectFirstArticle();

        ArticlePage.hasTitleText();
        ArticlePage.hasArticleText();
        ArticlePage.hasAuthorLink();
        ArticlePage.hasDate();
        ArticlePage.hasFollowButton();
        ArticlePage.hasFavoriteButton();
        ArticlePage.hasTags();
        ArticlePage.hasNotAuthCommentSection();
    });

    it('Creating article', function() {
        const article = {
            title: 'Test article',
            description: 'Test article description',
            body: 'Test article body',
            tags: 'test, article'
        };
        MainPage.selectSignIn();
        LoginPage.login(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'));
        MainPage.selectNewArticle();
        EditorPage.createArticle(article.title, article.description, article.body, article.tags);
        
        ArticlePage.hasTitleText(article.title);
        ArticlePage.hasArticleText(article.description);
        ArticlePage.hasArticleText(article.body);
        // Bug?: Tags are not displayed
        ArticlePage.hasAuthorLink();
        ArticlePage.hasDate();
        ArticlePage.hasEditButton();
        ArticlePage.hasDeleteButton();
        ArticlePage.hasCommentTextArea();
        ArticlePage.selectDeleteButton();
    });
})