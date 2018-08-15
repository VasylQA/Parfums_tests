const searchRequest = 'armani';
const toLowerCaseObject = {
  value: ""
};

module.exports = {
 'Check if Search results match to search request': function (browser) {
    /*
    We're dealing with asynchronous programming language, you 'for' code would be executed prior to tests code
    You need to wrap it in .perform() or .useCss() or other function and run it as callback
     */
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
             browser.getText(`(//a[@class="product__link"])[${i}]`, function (result) {
             toLowerCaseObject.value = result.value.toLowerCase();
             this.assert.containsText(toLowerCaseObject.value, searchRequest);
             })

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
      });

    browser.end();
  }

};
