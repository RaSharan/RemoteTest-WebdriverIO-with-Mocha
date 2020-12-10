import Page from './page';

class LatestOffersPage extends Page{
    open(){
        super.open('/shop/');
    }

    get offersHeader(){
        
        return $('div.c-page-1-section > div > h1')
    }

    get offerPrices(){
        return $$('span.c-price__main');

    }

    get offerPricesListText(){
        const pricesList = []
        this.offerPrices.map((element) => {
        if(element.getText()!==""){
            pricesList.push(element.getText())
        }
        });

        return pricesList;
    }
}

export default new LatestOffersPage();