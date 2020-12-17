import { path } from 'chromedriver';
import LoginPage from '../pageobjects/login.page'

xdescribe('User sees tiles on the shop page', () => {
    it('Given I am on the home page', () => {
        LoginPage.open();
        expect(browser).toHaveUrl("https://www.sky.com/")
    });
});