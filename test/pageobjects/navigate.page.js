import Page from './page';

class NavigatePage extends Page{
    open(){
        super.open('/');
    }

    get deals(){
        return $("a[data-tracking-label='masthead_visit_primary_deals_link']")
    }

}

export default new NavigatePage();