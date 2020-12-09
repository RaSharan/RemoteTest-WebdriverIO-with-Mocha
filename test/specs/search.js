import SearchPage from '../pageobjects/search.page'
import resources from '../resources';
// Feature: This feature will make the search show the results that are determined by editorial, as well as generic searches.

// Scenario: User sees the editorial section in specific searches
describe('User sees the editorial section in specific searches', () => {

    before('Given I am on the home page', () => {
        SearchPage.open();
        $(resources.cookieMessage).waitForDisplayed({timeout:10000});
        browser.switchToFrame($(resources.cookieMessage));
        $(resources.agree).click();
        browser.switchToParentFrame();
        expect(browser).toHaveUrl("https://www.sky.com/")
    });

    it('Click search bar', () => {
        //expect(SearchPage.searchBtn).toBeExisting();
        browser.pause(10000)
        SearchPage.searchBtn.click();
        expect(SearchPage.searchInput).toBeDisplayed();
    });

    it('When I search "sky" in the search bar', () => {
        browser.pause(5000)
        SearchPage.searchInput.setValue("sky")
        const chkTxt = SearchPage.searchInput.getText()
        if (chkTxt == "sky"){
            expect(chkTxt).toBeTruthy
        }

    });

    it('Then I should see an editorial section.', () => {
        expect(SearchPage.searchEditorialTxt).toHaveText("Sky Shop")
        expect(SearchPage.searchEditorialBody).toHaveText(resources.editorialTxt)
        
    });
});