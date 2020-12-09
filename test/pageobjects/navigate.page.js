import Page from './page';

class NavigatePage extends Page{
    open(){
        super.open('/');
    }

    get deals(){
        return $("//*[@id='masthead-navigation']/div/div[1]/div[1]/nav/ul/li[5]/div/div[1]/a");
    }

}

export default new NavigatePage();