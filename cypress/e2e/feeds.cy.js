import LoginPage from "../pages/login";
import MainPage from "../pages/main";

describe('Feed flows', function() {
    it('Global feed loaded', function() {
    MainPage.visit();
    MainPage.hasGlobalFeedSelected();
    MainPage.hasTenPreviewArticles();
    MainPage.hasDataInEachArticlePreview();
    MainPage.hasPagination();
    });

    it('Personal feed loaded', function() {
    LoginPage.visit();
    LoginPage.login(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'));
    MainPage.hasUserFeedSelected();
    MainPage.hasTenPreviewArticles();
    MainPage.hasDataInEachArticlePreview();
    MainPage.hasNoPagination();
    });
})