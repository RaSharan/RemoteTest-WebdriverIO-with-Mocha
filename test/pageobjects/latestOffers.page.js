import Page from './page';

class LatestOffersPage extends Page{
    open(){
        super.open('/shop/');
    }

    get offersHeader(){
        return $('/html/body/div[6]/div[1]/section[2]/div/div/div[1]/div/h1');
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