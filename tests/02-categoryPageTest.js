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
      .assert.urlContains('parfyumeriya')  //хардкод
      .useXpath()
      .assert.containsText('(//div[@class="breadcrumbs"]/ul/li/span)[2]', categoryName)  //лучше было сделать локатор с именем категории и поставить assert.elementPresent()
      .useCss()   //`//div[@class="breadcrumbs"]//span[text()="${categoryName}"]`
},

  'Add product to Cart': function (browser) {   //твой тест вообще не по тем степам идет
    const homepage = browser.page.homePage();
    const category = browser.page.categoryPage();
    const productNumber = 2;
    const SKU = '238426';

    homepage.navigate();

    browser
      .maximizeWindow()
      .pause(3000);

    homepage
      .hoverOnPerfumeryCategoryLink()
      .clickSaleSubCategoryInPerfumeryCategory();

    category
      .hoverOnProduct(productNumber)  //тут у тебя передаются параметры, а в пейдж обджекте функции без параметров?
      .clickAddToCart(SKU);

    browser
      .waitForElementVisible('.cart__name--link', browser.globals.smallWait)
      .assert.containsText('.cart__name--link', "Lanvin Lanvin Eclat D'Arpege")  //опять хардкод
      .assert.attributeEquals('.cart__input-count.item-quantity.js-quantity.hidden-mobile', 'data-quantity', '1')
      .end();
  },


  //второй тест уже упал, продукт теперь на 1-м месте - http://take.ms/agBGX
};
