import SearchPage from '../pageobjects/search.page'
import resources from '../resources';
import {waitAndClick, waitPreloader} from '../utilities/helper'

describe('User sees the editorial section in specific searches', () => {
    
    before('Given I am on the home page', () => {
        SearchPage.open();
        $(resources.cookieMessage).waitForDisplayed({timeout:10000});
        browser.switchToFrame($(resources.cookieMessage));
        $(resources.agree).click();
        browser.switchToParentFrame();
    });

    it('Click search bar', () => {
        expect(browser).toHaveUrl("https://www.sky.com/")
        waitAndClick(SearchPage.searchBtn,6000);
        expect(SearchPage.searchInput).toBeDisplayed();
    });

    it('When I search "sky" in the search bar', () => {

        waitPreloader(SearchPage.searchInput,5000)
        SearchPage.searchInput.setValue("sky")

        let chkTxt = SearchPage.searchInput.getText()
        if (chkTxt == "sky"){
            expect(chkTxt).toBeTruthy
        }
        else
            expect(chkTxt).toBeFalsy

    });

    it('When I search "tv" in the search bar', () => {
        
        waitPreloader(SearchPage.searchInput,5000)
        SearchPage.searchInput.setValue("tv")
        let chkTxt = SearchPage.searchInput.getText()
        if (chkTxt == "tv"){
            expect(chkTxt).toBeTruthy
        }
        else
            expect(chkTxt).toBeFalsy

    });

    it('Then I should see an editorial section.', () => {
        expect(SearchPage.searchEditorialTxt).toHaveText("Sky Shop")
        expect(SearchPage.searchEditorialBody).toHaveText(resources.editorialTxt)
        
    });
});
