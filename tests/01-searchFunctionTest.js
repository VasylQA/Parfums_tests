const searchRequest = 'помада';
const searchRequestUpperCase = 'Помада';

module.exports = {
  'Check if Search results match to search request': function (browser) { // is not working correctly
    const homepage = browser.page.homePage();

    homepage
      .navigate()
      .enterSearchRequest(searchRequest)
      .clickSubmitSearchButton();

    for (let i = 0; i<20; i++) {
      browser
        .useXpath()
        .waitForElementVisible('//span[@class="product__link-desc"]', browser.globals.smallWait)
        .moveToElement('//span[@class="product__link-desc"]',10,10)
        .assert.containsText("//span[@class=\"product__link-desc\"]", searchRequestUpperCase || searchRequest);
    }
    browser.end();
  },

  'Check if all products have images': function (browser) { // is not working correctly
    const homepage = browser.page.homePage();

    homepage
      .navigate()
      .enterSearchRequest(searchRequest)
      .clickSubmitSearchButton();

    for (let i = 0; i<20; i++) {
      browser
        .useCss()
        .waitForElementVisible('.product__image', browser.globals.smallWait)
        .moveToElement('.product__image',10,10)
        .assert.elementPresent('.product__image');
    }
    browser.end();
  },

  'Check if number of products is 20': function (browser) {  // is not working at all
    const homepage = browser.page.homePage();

    homepage
      .navigate()
      .enterSearchRequest(searchRequest)
      .clickSubmitSearchButton();

    let n = 0;

    browser
      .elements('xpath', '//span[@class="product__link-desc"]', function (result) {
        for (let i = 0; i<result.length; i++)
          n = n + 1;
        return n;
      });

    browser.assert.value(n, 20);

    browser.end();
  }

};
