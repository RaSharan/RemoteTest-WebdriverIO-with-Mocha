export const waitAndClick = (el, timeout) => {
    el.waitForDisplayed({ timeout });
    el.click();
  };

export const waitPreloader = (el, timeout) => {
  el.waitForExist({timeout});

} 