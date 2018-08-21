const searchRequest = 'armani';

module.exports = {
  'Check if Search results match to search request': function (browser) {
    const homepage = browser.page.homePage();

    homepage.navigate();

    browser.maximizeWindow();

    homepage
      .enterSearchRequest(searchRequest)
      .clickSubmitSearchButton();

    browser.perform(function() {
      browser.elements('xpath', '//span[@class="product__link-desc"]', function (result) {
        for (let i = 1; i <= result.value.length; i++) {
          browser
            .useXpath()
            .waitForElementVisible(`(//a[@class="product__link"])[${i}]`, browser.globals.smallWait)
            .moveToElement(`(//a[@class="product__link"])[${i}]`, 10, 10)
            .assert.containsText(`(//a[@class="product__link"])[${i}]`, searchRequest || `(//a[@class="product__link"])[${i}]`, searchRequest1);
        }
        browser.useCss();
      });
    });
  },

  'Check if all products on search results page have images': function (browser) {
    const homepage = browser.page.homePage();
    const searchResults = browser.page.searchResultsPage();

    homepage
      .navigate();

    browser.maximizeWindow();

    homepage
      .enterSearchRequest(searchRequest)
      .clickSubmitSearchButton();

    searchResults.checkIfAllProductsHaveImages();
  },

  'Check if number of products on search results page is 20': function (browser) {
    const homepage = browser.page.homePage();
    const searchResults = browser.page.searchResultsPage();

    homepage
      .navigate()
      .enterSearchRequest(searchRequest)
      .clickSubmitSearchButton();

    searchResults.checkIfNumberOfProductsIs20();
    searchResults.checkIfPaginationIsPresent();

    browser.end();
  }

};
