const commands = {
  hoverOnProduct: function (productNumber) {
    return this
      .waitForElementVisible('@productArea', this.api.globals.smallWait)
      .api.useXpath()
      .moveToElement(`(//div[@class="product__content"])[${productNumber}]`, 10, 10)
      .useCss();
  },

  clickAddToCart: function (SKU) {
    return this
      .waitForElementVisible(`.add-to-cart.product__addtocart[data-sku="${SKU}"]`, this.api.globals.smallWait)
      .moveToElement(`.add-to-cart.product__addtocart[data-sku="${SKU}"]`, 10, 10)
      .click(`.add-to-cart.product__addtocart[data-sku="${SKU}"]`);
  }
};

module.exports = {
  commands: [commands],
  elements: {
    addToCartButton: {
      selector: `.add-to-cart.product__addtocart`
    },
    productArea: {
      selector: `(//div[@class="product__content"])`,
      locateStrategy: 'xpath'
    }
  }

};