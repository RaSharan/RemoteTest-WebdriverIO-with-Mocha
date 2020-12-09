import Page from './page';

class SearchPage extends Page{
    open(){
        super.open('/');
    }

    get searchBtn(){
        return $("//*[@id='masthead-search-toggle']");
    }

    get searchInput(){
        return $("//*[@id='masthead-navigation']/div/div[1]/div[2]/div/div/div/div/div/div/div/input")

    }

    get searchSubmitBtn(){
        return $("//*[@id='masthead-navigation']/div/div[1]/div[2]/div/div/div/div/div/div/div/button")

    }

    get searchWrapper() {
        return $("search-results-wrapper")

    }

    get searchEditorialTxt(){
        return $("//*[@id='search-results-container']/div[1]/div[1]/div[2]/div/div[1]/a")
    }
    
    get searchEditorialBody(){
        return $("//*[@id='search-results-container']/div[1]/div[1]/div[2]/div/div[2]")
    }
}

export default new SearchPage();