import Page from './page';

class NavigatePage extends Page{
    open(){
        super.open('/');
    }

    get deals(){
        return $("#masthead-navigation > div > div:nth-of-type(1) > div:nth-of-type(1) > nav > ul > li:nth-of-type(5) > div > div:nth-of-type(1) > a")
    }

}

export default new NavigatePage();