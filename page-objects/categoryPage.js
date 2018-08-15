const commands = {
  hoverOnProduct: function (productNumber) {
    return this
      .waitForElementVisible('@productArea', this.api.globals.smallWait)
      .moveToElement('@productArea', 10, 10);
  },
  clickAddToCart: function (SKU) {
    return this
      .waitForElementVisible('@addToCartButton', this.api.globals.smallWait)
      .click('@addToCartButton');
  }
};

module.exports = {
  commands: [commands],
  elements: {
    addToCartButton: {
      selector: `.add-to-cart.product__addtocart[data-sku="${this.SKU}]`
    },
    productArea: {
      selector: `(//div[@class="product__content"])[${this.productNumber}]`,
      locateStrategy: 'xpath'
    }
  }

};