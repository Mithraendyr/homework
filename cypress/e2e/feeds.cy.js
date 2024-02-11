import LoginPage from "../pages/login";
import MainPage from "../pages/main";

describe('Feed flows', function() {
    it('Should see global feed when not signed-in', function() {
    MainPage.visit();
    MainPage.hasGlobalFeedSelected();
    MainPage.hasTenPreviewArticles();
    MainPage.hasTagListInPreviewArticle();
    MainPage.hasPagination();
    });

    it('Should see personal feed when signed-in', function() {
    LoginPage.visit();
    LoginPage.login(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'));
    MainPage.hasUserFeedSelected();
    MainPage.hasTenPreviewArticles();
    MainPage.hasTagListInPreviewArticle();
    MainPage.hasNoPagination();
    });
})