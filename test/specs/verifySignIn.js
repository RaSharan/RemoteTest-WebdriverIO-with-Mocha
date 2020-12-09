import LoginPage from '../pageobjects/login.page'
import resources from '../resources'


describe('User sees tiles on the shop page', () => {

    before('Given I am on the home page', () => {
        LoginPage.open();
        $(resources.cookieMessage).waitForDisplayed({timeout:10000});
        browser.switchToFrame($(resources.cookieMessage));
        $(resources.agree).click();
        browser.switchToParentFrame();
    });

    it('Click signin', () => {

        $(resources.signin).click();
        expect(browser).toHaveTitle(resources.signInTitle);
        
    });

    it('I try to sign in with invalid credentials ', () => {
        LoginPage.login(resources.username, resources.password);
        //Captcha intercept---Alternative verification --- Dev/Manual intervention needed
        //expect(browser).toHaveUrlContaining("/securitycheck/")
        expect($(resources.signInErr)).toHaveText("Sorry, we did not recognise either your username or password")
        
    });


});


