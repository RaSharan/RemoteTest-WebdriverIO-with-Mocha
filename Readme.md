Goals:

To set up a framework and get the tests automated on the sky website. 
Automate them using JavaScript or TypeScript preferably using WebdriverIO with Mocha or Cucumber.
And send the Github link

--------------------------------------------------------------------------------------------------------------------------------------

***Feature file***

Feature: This feature will make sure that the shop page is navigable and usable.
    Scenario: User navigates to shop page
        Given I am on the home page
        When I navigate to ‘Deals’
        Then the user should be on the https://www.sky.com/shop/offers  page 

    Note: You will have to handle the ‘accept cookies’ in your test.
    Home page is https://www.sky.com/
    It is better to clear the cookies for sky.com or clear your web page history.


    Scenario: User sees tiles on the shop page
        Given I am on the home page
        When I try to sign in with invalid credentials 
        Then I should see a text saying that ‘Sorry, we did not recognise either your username or password’


    Scenario: User sees a list of offers on the latest offers page
        Given I am on the 'https://www.sky.com/shop/' page 
        Then I see a list of offers with a price to it (please see snapshot b)

    For example:
    “£27.50”, “£66.50”, “£42.50”
    Note: Please change the offer prices if the page shows something different. Assert only the first 3 offers.


Feature: This feature will make the search show the results that are determined by editorial, as well as generic searches.

    Scenario: User sees the editorial section in specific searches
        Given I am on the home page
        When I search ‘sky’ in the search bar
        Then I should see an editorial section.
        (Note: Editorial section is the section highlighted in snapshot c)
    (note: if ‘sky’ doesn’t work you can change it to ‘tv’)

--------------------------------------------------------------------------------------------------------------------------------------

***Frame work used for automation***

1. Webdriver.IO testing framework
2. Mocha BDD
3. JavaScript
4. Babel register

--------------------------------------------------------------------------------------------------------------------------------------
***Pre-requisites***

-You'll need Node.js installed globally
-Install at least v12.16.1 or higher as this is the oldest active LTS version
-Only releases that are or will become an LTS release are officially supported
-JDK 1.8+

--------------------------------------------------------------------------------------------------------------------------------------
***Getting Started/Installation***

1. Clone the branch locally
2. Run npm i

--------------------------------------------------------------------------------------------------------------------------------------
***Run Tests***

$npx wdio wdio.conf.js

--------------------------------------------------------------------------------------------------------------------------------------
***Spec***

Test reporter, that prints detailed results to console.