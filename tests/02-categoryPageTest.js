const categoryName = 'Распродажа';
const categoryURL = 'parfyumeriya';

module.exports = {
  'Open category page': function (browser) {
    const homepage = browser.page.homePage();

    homepage.navigate();

    browser.maximizeWindow();

    homepage
      .hoverOnPerfumeryCategoryLink()
      .clickSaleSubCategoryInPerfumeryCategory();

    browser
      .assert.urlContains(categoryURL)
      .useXpath()
      .assert.containsText('(//div[@class="breadcrumbs"]/ul/li/span)[2]', categoryName)
      .useCss();
  },

  'Add product to Cart': function (browser) {
    const homepage = browser.page.homePage();
    const category = browser.page.categoryPage();
    const productNumber = 3;
    const SKU = '834170';
    const productName = 'Стойкая помада для губ Giorgio Armani Rouge D\'armani Lasting Satin Lip Color';

    homepage.navigate();

    browser.maximizeWindow();

    homepage
      .hoverOnPerfumeryCategoryLink()
      .clickSaleSubCategoryInPerfumeryCategory();


    category.hoverOnProduct(productNumber);
    category.clickAddToCart(SKU);

    browser
      .waitForElementVisible('.cart__name--link', browser.globals.smallWait)
      .assert.containsText('.cart__name--link', productName)
      .assert.attributeEquals('.cart__input-count.item-quantity.js-quantity.hidden-mobile', 'data-quantity', '1')
      .end();
  },

};
