import NavigatePage from '../pageobjects/navigate.page'
import {waitAndClick} from '../utilities/helper'
import resources from '../resources'

describe('User navigates to shop page', () => {

    before('Given I am on the home page', () => {
        NavigatePage.open();
        $(resources.cookieMessage).waitForDisplayed({timeout:10000});
        browser.switchToFrame($(resources.cookieMessage));
        $(resources.agree).click();
        browser.switchToParentFrame();
    });

    it('test should accept cookies', () => {
        const cookies = browser.getCookies()
        expect(cookies).toMatchObject(JSON);
        expect(cookies['domain']=='.sky.com').toBeTruthy
     });

    it('When I navigate to "Deals"', () => {
        expect(NavigatePage.deals).toHaveText("Deals")
        waitAndClick(NavigatePage.deals,5000); 
    });

    it('Then I Should be on the offers page"', () => {
        expect(browser).toHaveUrl("https://www.sky.com/shop/offers")
    });
});


