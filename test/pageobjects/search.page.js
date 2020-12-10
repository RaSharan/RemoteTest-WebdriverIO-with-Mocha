import Page from './page';

class SearchPage extends Page{
    open(){
        super.open('/');
    }

    get searchBtn(){
        
        return $("#masthead-search-toggle.button")
    }

    get searchInput(){
        
        return $("#masthead-navigation > div input")

    }

    get searchSubmitBtn(){
        
        return $("#masthead-navigation > div .search-submit-button")

    }

    get searchWrapper() {
        return $("#search-results-wrapper")

    }

    get searchEditorialTxt(){
        
        return $("#search-results-container > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(1)")
    }
    
    get searchEditorialBody(){
        
        return $("#search-results-container > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > div > div:nth-of-type(2)")
    }
}

export default new SearchPage();