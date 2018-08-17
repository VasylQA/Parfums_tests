const searchRequest = 'armani';
const searchRequest1 = 'Armani';

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
          //searchRequest.charAt(0).toUpperCase() + searchRequest.slice(1)
        }
        browser.useCss();
      });
    });
  },

  'Check if all products have images': function (browser) {
    const homepage = browser.page.homePage();

    homepage
      .navigate();

    browser.maximizeWindow();

    homepage
      .enterSearchRequest(searchRequest)
      .clickSubmitSearchButton();

    browser.perform(function() {
      browser.elements('xpath', '//span[@class="product__link-desc"]', function (result) {
        for (let i = 1; i <= result.value.length; i++) {
          browser
            .useXpath()
            .waitForElementVisible(`(//img[@class="product__image"])[${i}]`, browser.globals.smallWait)
            .moveToElement(`(//img[@class="product__image"])[${i}]`,10,10)
            .assert.attributeContains(`(//img[@class="product__image"])[${i}]`, 'src', '/upload/products/');
        }
      });
    })
  },

  'Check if number of products is 20': function (browser) {
    const homepage = browser.page.homePage();

    homepage
      .navigate()
      .enterSearchRequest(searchRequest)
      .clickSubmitSearchButton();

    browser
      .elements('xpath', '//span[@class="product__link-desc"]', function (result) {
        browser.assert.equal(result.value.length, 20)
      })
      .expect.element('//span[@class="product__link-desc"]').to.be.present.before(browser.globals.smallWait);
    browser.end();
  }

};
