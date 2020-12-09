export default agreeCookies( () =>{
    $(resources.cookieMessage).waitForDisplayed({timeout:10000});
    browser.switchToFrame($(resources.cookieMessage));
    $(resources.agree).click();
    browser.switchToParentFrame();
});
