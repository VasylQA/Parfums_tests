const searchRequest = 'помада';
const searchRequestUpperCase = 'Помада';

module.exports = {
  'Check if Search results match to search request': function (browser) {
    /*
    We're dealing with asynchronous programming language, you 'for' code would be executed prior to tests code
    You need to wrap it in .perform() or .useCss() or other function and run it as callback
     */
    const homepage = browser.page.homePage();

    browser.maximizeWindow();

    homepage.navigate();

    browser.maximizeWindow();

    homepage
      .enterSearchRequest(searchRequest)
      .clickSubmitSearchButton();

    browser.perform(()=> {
      browser.elements('xpath', '//span[@class="product__link-desc"]', (results)=>{
        for (let i = 0; i<results.value.length; i++) {
          browser
            .useXpath()
            .waitForElementVisible(`(//span[@class="product__link-desc"])[${i}]`, browser.globals.smallWait)
            .moveToElement(`(//span[@class="product__link-desc"])[${i}]`,10,10)
            .assert.containsText(`(//span[@class="product__link-desc"])[${i}]`, searchRequestUpperCase || searchRequest)
            .useCss();
        }
      })
    });
   // browser.end(); - closes the session. this need to be done after ALL tests
  },

  'Check if all products have images': function (browser) { // is not working correctly
    const homepage = browser.page.homePage();

    homepage
      .navigate()
      .enterSearchRequest(searchRequest)
      .clickSubmitSearchButton();

    browser.perform(()=> {


      for (let i = 0; i<20; i++) {
        browser
          .useCss()
          .waitForElementVisible('.product__image', browser.globals.smallWait)
          .moveToElement('.product__image',10,10)
          .assert.elementPresent('.product__image');
      }
    });
   // browser.end();
  },

  'Check if number of products is 20': function (browser) {  // is not working at all
    const homepage = browser.page.homePage();


    homepage
      .navigate()
      .enterSearchRequest(searchRequest)
      .clickSubmitSearchButton();

    //let n = 0;  //почитай про переменную let и ее свойства

    browser
      .elements('xpath', '//span[@class="product__link-desc"]', function (result) {
       /* for (let i = 0; i<result.length; i++) // зачем тут цикл, если можно просто взять длинну массива? О_о
          n = n + 1;
        return n;*/

       browser.assert.equal(result.value.length, 20, 'Quantity of products is correct')
      });

   // browser.assert.value(n, 20);

    browser.end();
  }

};
