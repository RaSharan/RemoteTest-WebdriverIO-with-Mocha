import LatestOffersPage from '../pageobjects/latestOffers.page';
import resources from '../resources'

// Scenario: User sees a list of offers on the latest offers page 
describe('User sees a list of offers on the latest offers page', () => {

    before(() => {
        LatestOffersPage.open();
    });

    it('I am on the shop page', () => {
        expect(browser).toHaveUrl("https://www.sky.com/shop/offers");
    });

    it('It should have banner Offers', () => {
        expect(LatestOffersPage.offersHeader).toHaveText("Sky Offers & Bundles");
    });

    it('Assert first 3 prices"', () => {
        let offerPricesList = []
        offerPricesList = LatestOffersPage.offerPricesListText;
        for (let index = 0; index < 3; index++) {
            expect(offerPricesList[index]===resources.pricesList[index]).toBeTruthy
        }
        console.log(resources.pricesList)
      });


});


