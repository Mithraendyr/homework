import LoginPage from "../pages/login";
import SignUpPage from "../pages/signup";
import MainPage from "../pages/main";

describe('Authentication flows', function() {
    beforeEach(() => cy.visit(''));

    it('Sign-up new account', function() {
        const dateNow = Date.now();
        const newTestUser = {
            username: 't' + dateNow,
            email: dateNow + '@test.lv',
            password: 'test123'
        };
        MainPage.selectSignUp();
        SignUpPage.isAt();
        SignUpPage.signup(newTestUser.username, newTestUser.email, newTestUser.password);
        MainPage.verifyUserIsLoggedIn();
    });

    it('Sign-in existing account', function() {
        MainPage.selectSignIn();
        LoginPage.login(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'));
        MainPage.verifyUserIsLoggedIn();
    });
});
