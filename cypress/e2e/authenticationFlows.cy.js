import LoginPage from "../pages/login";
import SignUpPage from "../pages/signup";
import MainPage from "../pages/main";

describe('Authentication flows', function() {
    const dateNow = Date.now();
    const testUser = {
        username: 'test'+dateNow,
        email: dateNow+'t@test.lv',
        pasword: 'test123'
    }

    beforeEach(() => cy.visit(''));

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