import LoginPage from "../pages/login";
import SignUpPage from "../pages/signup";
import MainPage from "../pages/main";

describe('Authentication flows', function() {
    before(() => {
        const dateNow = Date.now();
        Cypress.env('dateNow', dateNow);
        const testUser = {
            username: 'test'+Date.now(),
            email: Date.now()+'t@test.lv',
            pasword: 'test123'
        }
      });

    beforeEach(() => cy.visit(''));

    const testUser = {
        username: 'test'+Date.now(),
        email: Date.now()+'t@test.lv',
        pasword: 'test123'
    }

    it('Sign-up new account', function() {
    MainPage.selectSignUp();

    SignUpPage.isAt();
    SignUpPage.signup(testUser.username, testUser.email, testUser.pasword);

    MainPage.verifyUserIsLoggedIn();
    MainPage.verifyUserhasNoPersonalFeed();
    });

    it('Sign-in existing account', function() {
    MainPage.selectSignIn();

    LoginPage.login(testUser.email, testUser.pasword);

    MainPage.verifyUserIsLoggedIn();
    MainPage.verifyUserhasNoPersonalFeed();
    });

    // no reset functionality just updating
    // it('Reset password', function() {
    // });  
})