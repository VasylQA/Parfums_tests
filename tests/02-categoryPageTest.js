const categoryName = 'Распродажа';

module.exports = {
 'Open category page': function (browser) {
    const homepage = browser.page.homePage();

    homepage.navigate();

    browser.maximizeWindow();

    homepage
      .hoverOnPerfumeryCategoryLink()
      .clickSaleSubCategoryInPerfumeryCategory();

    browser
      .assert.urlContains('parfyumeriya')
      .useXpath()
      .assert.containsText('(//div[@class="breadcrumbs"]/ul/li/span)[2]', categoryName)
      .useCss()
  },

  'Add product to Cart': function (browser) {
    const homepage = browser.page.homePage();
    const category = browser.page.categoryPage();
    const productNumber = 2;
    const SKU = '238426';

    homepage.navigate();

    browser.maximizeWindow();

    homepage
      .hoverOnPerfumeryCategoryLink()
      .clickSaleSubCategoryInPerfumeryCategory();

    category
      .hoverOnProduct(productNumber)
      .clickAddToCart(SKU);

    browser
      .waitForElementVisible('.cart__name--link', browser.globals.smallWait)
      .assert.containsText('.cart__name--link', "Lanvin Lanvin Eclat D'Arpege")
      .assert.attributeEquals('.cart__input-count.item-quantity.js-quantity.hidden-mobile', 'data-quantity', '1')
      .end();
  },

};
