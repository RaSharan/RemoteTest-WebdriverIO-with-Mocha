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
        
        return $("div.header > a:nth-child(1)")
    }
    
    get searchEditorialBody(){
        
        return $("div.c-text-body")
    }
}

export default new SearchPage();