import NavigatePage from '../pageobjects/navigate.page'
// Feature: This feature will make sure that the shop page is navigable and usable.

// Scenario: User navigates to shop page
describe('User navigates to shop page', () => {

    before('Given I am on the home page', () => {
        NavigatePage.open();
    });

    it('test should accept cookies', () => {
        const cookies = browser.getCookies()
        expect(cookies).toMatchObject(JSON);
        //console.log(cookies)
        expect(cookies['domain']=='.sky.com').toBeTruthy
     });

    it('When I navigate to "Deals"', () => {
        expect(NavigatePage.deals).toHaveText("Deals")
        browser.pause(500); //Explicit wait
        NavigatePage.deals.click();
        //waitAndClick(NavigatePage.deals,1000); -- implicit wait
    });

    it('Then I Should be on the offers page"', () => {
        expect(browser).toHaveUrl("https://www.sky.com/shop/offers")
    });
});


